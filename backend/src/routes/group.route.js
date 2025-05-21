import { Router } from "express";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { createGroup } from "../controllers/group.controller.js";
const groupRouter = Router();

groupRouter.post("/create-group", isLoggedIn, createGroup);

export default groupRouter;
