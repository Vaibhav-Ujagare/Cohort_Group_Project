import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        github_link: {
            type: String,
            required: true,
        },
        hashnode_link: {
            type: String,
            required: true,
        },
        peerlist_link: {
            type: String,
            required: true,
        },
        tweeter_link: {
            type: String,
            required: true,
        },
        is_sign_in_allowed: {
            type: Boolean,
        },
        is_team_joined: {
            type: Boolean,
        },
    },
    { timestamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;
