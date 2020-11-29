import express from "express";
import  expressAsyncHandler  from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const seedUser = await User.insertMany(data.users);
    res.send(seedUser);
  })
);
userRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
  })
);
export default userRouter;
