import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    email: { type: String, required: true },
    full_name: { type: String, required: true },
    username: { type: String, required: true },
    bio: { type: String, required: true },
    profile_picture: { type: String, required: true },
    cover_photo: { type: String, required: true },
    loction: { type: String, required: true },
    followers: { type: String, required: true },
    following: { type: String, required: true },
    connections: { type: String, required: true },
  },
  { timestamps: true, minimize: false },
);

const User = mongoose.model("User", userSchema);

export default User;
