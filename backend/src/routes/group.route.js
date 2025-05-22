import { Router } from "express";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import {
    createGroup,
    getAllGroups,
    getGroupById,
    updateGroupDetails,
    requestGroupToJoin,
    getAllrequest,
} from "../controllers/group.controller.js";

const groupRouter = Router();

groupRouter.post("/create-group", isLoggedIn, createGroup);
groupRouter.get("/all-groups", isLoggedIn, getAllGroups);
groupRouter.post("/:groupId", isLoggedIn, getGroupById);
groupRouter.put("/update/:groupId", isLoggedIn, updateGroupDetails);
groupRouter.post("/request/:groupId", isLoggedIn, requestGroupToJoin);
groupRouter.get("/all-request", isLoggedIn, getAllrequest);

export default groupRouter;
