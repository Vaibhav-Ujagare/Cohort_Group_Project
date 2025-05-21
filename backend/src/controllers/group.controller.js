import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { db } from "../db/prismaDBConnect.js";
import { ROLE } from "../generated/prisma/index.js";

export const createGroup = asyncHandler(async (req, res) => {
    const { group_name, group_desc } = req.body;
    try {
        if (!group_name || !group_desc) {
            throw new ApiError(
                400,
                "Group name or description must not be empty",
            );
        }
        const admin = await db.group_details.findFirst({
            where: {
                admin_id: req.user.id,
            },
        });

        console.log(admin);
        if (admin) {
            throw new ApiError(
                401,
                "You are not allowed to create second group",
            );
        }

        const newGroup = await db.group_details.create({
            data: {
                group_name,
                group_desc,
                admin_id: req.user.id,
            },
        });
        console.log("group created successfully");
        if (!newGroup) {
            throw new ApiError(
                400,
                "Something went wrong while creating a group",
            );
        }

        await db.user_group_mapping.create({
            data: {
                group_id: newGroup.id,
                user_id: req.user.id,
            },
        });

        console.log("group mapped successfully");

        await db.user_details.update({
            where: {
                id: req.user.id,
            },
            data: {
                role: ROLE.ADMIN,
            },
        });
        console.log(newGroup.id);
        await db.notice_board_details.create({
            data: {
                group_id: newGroup.id,
                user_id: req.user.id,
            },
        });

        return res
            .status(201)
            .json(new ApiResponse(200, newGroup, "Group Created Successfully"));
    } catch (error) {
        throw new ApiError(
            400,
            error?.message || "Error while creating a group",
        );
    }
});

export const getAllGroups = asyncHandler(async (req, res) => {
    const allgroups = await db.group_details.findMany();

    return res
        .status(201)
        .json(
            new ApiResponse(200, allgroups, "All Group Fetched Successfully"),
        );
});

export const getGroupById = asyncHandler(async (req, res) => {
    const groupId = req.params.groupId;

    const group = await db.group_details.findUnique({
        where: {
            id: groupId,
        },
    });

    return res
        .status(201)
        .json(new ApiResponse(200, group, "Group Fetched Successfully"));
});

export const updateGroupDetails = asyncHandler(async (req, res) => {
    const groupId = req.params.groupId;
    const { group_name, group_desc } = req.body;

    try {
        const group = await db.group_details.update({
            where: {
                id: groupId,
            },
            data: {
                group_name,
                group_desc,
            },
        });

        return res
            .status(201)
            .json(
                new ApiResponse(
                    200,
                    group,
                    "Group Details Update Successfully",
                ),
            );
    } catch (error) {
        throw new ApiError(
            401,
            error?.message || "Error while updating group details",
        );
    }
});

export const requestGroupToJoin = asyncHandler(async (req, res) => {
    const groupId = req.params.groupId;
    const { request_note_by_user } = req.body;

    const joiningRequest = await db.group_joining_request_details.create({
        data: {
            group_id: groupId,
            user_id: req.user.id,
            request_note_by_user,
            requested_on: new Date(),
        },
    });

    return res
        .status(201)
        .json(
            new ApiResponse(200, joiningRequest, "Request Send Successfully"),
        );
});
