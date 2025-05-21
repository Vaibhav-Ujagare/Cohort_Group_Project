import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import bcrypt from "bcryptjs";
import { db } from "../db/prismaDBConnect.js";
import jwt from "jsonwebtoken";

export const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await db.user_details.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                email: true,
                role: true,
            },
        });

        const accessToken = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRY },
        );

        const refreshToken = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
        );

        await db.user_details.update({
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
    const {
        email,
        password,
        frist_name,
        last_name,
        github_link,
        hashnode_link,
        peerlist_link,
        tweeter_link,
    } = req.body;

    const existingUser = await db.user_details.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        throw new ApiError(400, "User already exist");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user_details.create({
        data: {
            email,
            password: hashedPassword,
            frist_name,
            last_name,
            github_link,
            hashnode_link,
            peerlist_link,
            tweeter_link,
            role: "MEMBER",
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
    const { email, password } = req.body;

    const user = await db.user_details.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        throw new ApiError(401, "Invalid Username of Password");
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
        throw new ApiError(401, "Invalid Username of Password");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
        user.id,
    );

    await db.user_details.update({
        where: { id: user.id },
        data: { refreshToken },
    });

    const loggedInUser = await db.user_details.findUnique({
        where: {
            id: user.id,
        },
        select: {
            email: true,
            id: true,
        },
    });

    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // only true in production
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
    };

    res.cookie("accessToken", accessToken, cookieOptions);
    res.cookie("refreshToken", refreshToken, cookieOptions);
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                user: loggedInUser,
                accessToken,
                refreshToken,
            },
            "User Logged In Successfully",
        ),
    );
});
