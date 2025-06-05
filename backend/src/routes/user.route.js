import { Router } from "express";
import {
    loginUser,
    registerUser,
    uploadCSV,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.post("/register", registerUser);

userRouter.post(
    "/login",

    loginUser,
);

userRouter.post(
    "/upload",
    isLoggedIn,
    upload.fields([
        {
            name: "cohort_data",
            maxCount: 1,
        },
    ]),
    uploadCSV,
);

export default userRouter;
