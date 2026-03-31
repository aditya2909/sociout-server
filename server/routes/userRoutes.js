import express from "express";
import { protect } from "../middleware/auth.js";
import {
  acceptConnectionRequest,
  discoverUsers,
  followUser,
  getUserConnections,
  getUserData,
  getUserProfiles,
  sendConnection,
  unfollowUser,
  updateUserData,
} from "../controller/userController.js";
import { upload } from "../config/multer.js";
import { getUserRecentMessages } from "../controller/messageController.js";

const userRouter = express.Router();

userRouter.get("/data", protect, getUserData);
userRouter.post(
  "/update",
  upload.fields([
    { name: "profile", maxCount: 1 },
    { name: "cover", maxCount: 1 },
  ]),
  protect,
  updateUserData,
);
userRouter.post("/discover", protect, discoverUsers);
userRouter.post("/follow", protect, followUser);
userRouter.post("/unfollow", protect, unfollowUser);
userRouter.post("/connect", protect, sendConnection);
userRouter.post("/accept", protect, acceptConnectionRequest);
userRouter.post("/connection", protect, getUserConnections);
userRouter.post("/profiles", getUserProfiles);
userRouter.post("/recent-messages", getUserRecentMessages);

export default userRouter;
