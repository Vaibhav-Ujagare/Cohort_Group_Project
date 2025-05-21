import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: [process.env.BASE_URL],
        credentials: true,
        methods: ["GET", "POST", "DELETE", "PATCH", "OPTIONS", "PUT"],
        allowedHeaders: ["Content-Type", "Authorization", "Accept"],
        exposedHeaders: ["Set-Cookie", "*"],
    }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

import userRouter from "./routes/user.route.js";
import groupRouter from "./routes/group.route.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/group", groupRouter);

export default app;
