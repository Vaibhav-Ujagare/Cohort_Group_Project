import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { db } from "../db/prismaDBConnect.js";
import { ROLE } from "../generated/prisma/index.js";

export const createGroup = asyncHandler(async (req, res) => {
    console.log(req.user);
    const { group_name, group_desc } = req.body;

    try {
        if (!group_name || !group_desc) {
            throw new ApiError(
                400,
                "Group name or description must not be empty",
            );
        }

        const newGroup = await db.group.create({
            data: {
                group_name,
                group_desc,
                admin_id: req.user.id,
            },
        });


        if (!newGroup) {
            throw new ApiError(
                400,
                "Something went wrong while creating a group",
            );
        }

        await db.Usergroupmapping.create({
            data: {
                group_id: newGroup.id,
                user_id: req.user.id,
            },
        });

        await db.user.update({
            where: {
                id: req.user.id,
            },
            data: {
                role: ROLE.LEADER,
            },
        });

        await db.NoticeBoard.create({
            data: {
                group_id: newGroup.id,
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
