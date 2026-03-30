import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    email: { type: String, required: true },
    full_name: { type: String },
    username: { type: String },
    bio: { type: String },
    profile_picture: { type: String },
    cover_photo: { type: String },
    loction: { type: String },
    followers: { type: String },
    following: { type: String },
    connections: { type: String },
  },
  { timestamps: true, minimize: false },
);

const User = mongoose.model("User", userSchema);

export default User;
