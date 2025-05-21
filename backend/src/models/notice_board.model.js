import mongoose, { Schema } from "mongoose";

const noticeBoardSchema = new Schema(
    {
        group_id: {
            type: Schema.Types.ObjectId,
            ref: "Group",
            required: true,
            unique: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },
        board_text: {
            type: String,
        },
    },
    { timestamps: true },
);

const NoticeBoard = mongoose.model("NoticeBoard", noticeBoardSchema);
export default NoticeBoard;
