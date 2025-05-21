import { Router } from "express";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import {
    createGroup,
    getAllGroups,
    getGroupById,
    updateGroupDetails,
    requestGroupToJoin,
} from "../controllers/group.controller.js";

const groupRouter = Router();

groupRouter.post("/create-group", isLoggedIn, createGroup);
groupRouter.get("/all-groups", isLoggedIn, getAllGroups);
groupRouter.post("/group/:groupId", isLoggedIn, getGroupById);
groupRouter.put("/group/update/:groupId", isLoggedIn, updateGroupDetails);
groupRouter.post("/group/request/:groupId", isLoggedIn, requestGroupToJoin);

export default groupRouter;
