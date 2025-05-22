import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const userRouter = Router();

userRouter.post("/register", registerUser);

userRouter.post(
    "/login",
    upload.fields([
        {
            name: "cohort_data",
            maxCount: 1,
        },
    ]),
    loginUser,
);

export default userRouter;
