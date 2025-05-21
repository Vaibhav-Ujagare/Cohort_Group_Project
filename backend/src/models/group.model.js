import mongoose, { Schema } from "mongoose";

const groupSchema = new Schema(
    {
        group_name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        group_desc: {
            type: String,
            required: true,
        },
        is_published: {
            type: Boolean,
            required: true,
            default: false,
        },
        admin_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true },
);

const Group = mongoose.model("Group", groupSchema);
export default Group;
