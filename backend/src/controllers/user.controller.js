import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import bcrypt from "bcryptjs";
import { db } from "../db/prismaDBConnect.js";
import jwt from "jsonwebtoken";
import fs from "fs";
import csvParser from "csv-parser";
import { ROLE } from "../generated/prisma/index.js";

export const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await db.super_admin.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                username: true,
            },
        });

        const accessToken = jwt.sign(
            {
                id: user.id,
                username: user.username,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRY },
        );

        const refreshToken = jwt.sign(
            {
                id: user.id,
                username: user.username,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
        );

        console.log(user.username);

        await db.super_admin.update({
            where: { id: user.id },
            data: { refreshToken },
        });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(
            500,
            "Something went wrong while generating access and refresh token",
        );
    }
};

export const registerUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await db.super_admin.findUnique({
        where: {
            username,
        },
    });

    if (existingUser) {
        throw new ApiError(400, "User already exist");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.super_admin.create({
        data: {
            username,
            password: hashedPassword,
        },
    });

    if (!newUser) {
        throw new ApiError(401, "User not registered");
    }

    return res
        .status(201)
        .json(new ApiResponse(200, newUser, "User Created Successfully"));
});

export const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await db.super_admin.findUnique({
        where: {
            username,
        },
    });

    if (!user) {
        throw new ApiError(401, "User Not exists");
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
        throw new ApiError(401, "Wrong password");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
        user.id,
    );

    const cookieOptions = {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("accessToken", accessToken, cookieOptions);
    res.cookie("refreshToken", refreshToken, cookieOptions);

    res.status(200).json({
        message: "You Logged in as super admin",
    });
});

export const uploadCSV = asyncHandler(async (req, res) => {
    const csvFile = req.files?.cohort_data[0]?.path;

    const results = [];

    fs.createReadStream(csvFile)
        .pipe(csvParser())
        .on("data", (data) => {
            results.push(data);
        })
        .on("end", async () => {
            try {
                for (const row of results) {
                    // Create User
                    const hashedPassword = await bcrypt.hash(row.Password, 10);
                    const user = await db.user_details.upsert({
                        where: {
                            email: row.Email,
                        },
                        update: {
                            email: row.Email,
                            password: hashedPassword,
                            first_name: row.first_name,
                            last_name: row.last_name,
                            github_link: row.github_link,
                            hashnode_link: row.hashnode_link,
                            peerlist_link: row.peerlist_link,
                            tweeter_link: row.tweeter_link,
                            role: ROLE.MEMBER,
                        },
                        create: {
                            email: row.Email,
                            password: hashedPassword,
                            first_name: row.first_name,
                            last_name: row.last_name,
                            github_link: row.github_link,
                            hashnode_link: row.hashnode_link,
                            peerlist_link: row.peerlist_link,
                            tweeter_link: row.tweeter_link,
                            role: ROLE.MEMBER,
                        },
                    });

                    const cohort = await db.cohort_details.upsert({
                        where: {
                            cohort_name: row.Cohort_Name,
                        },
                        update: { cohort_name: row.Cohort_Name },
                        create: {
                            cohort_name: row.Cohort_Name,
                        },
                    });

                    await db.user_cohort_mapping.upsert({
                        where: {
                            user_id_cohort_id: {
                                user_id: user.id,
                                cohort_id: cohort.id,
                            },
                        },
                        update: {},
                        create: {
                            user_id: user.id,
                            cohort_id: cohort.id,
                        },
                    });
                }
                res.status(200).json({
                    message: "Users inserted successfully!",
                });
            } catch (err) {
                console.error("DB error:", err);
                res.status(500).json({ message: "Failed to insert data" });
            } finally {
                fs.unlinkSync(csvFile);
            }
        });
});
