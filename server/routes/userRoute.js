import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import User from "../models/userModel.js";
import { generateToken, isAuth } from "../utils.js";

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
userRouter.post(
  "/signin",

  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
      }
    } else {
      res.status(401).send({ message: "Invalid user email or password" });
    }
  })
);
userRouter.post(
  "/register",

  expressAsyncHandler(async (req, res) => {
    try {
      let user = await User.findOne({ email: req.body.email });

      if (!req.body.email || !req.body.password || !req.body.name) {
        return res.status(400).json({
          msg: "please fill all the required fields",
        });
      }
      if (req.body.password.length < 6) {
        return res.status(400).json({
          msg: "Please enter password with 6 or more character",
        });
      }
      if (user) {
        return res.status(400).json({
          msg: `User with this email ${req.body.email} already exists`,
        });
      }
      user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const createUser = await user.save();
      res.send({
        _id: createUser._id,
        name: createUser.name,
        email: createUser.email,
        isAdmin: createUser.isAdmin,
        token: generateToken(createUser),
      });
    } catch (err) {
      res.status(500).send("server error");
    }
  })
);

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ msg: "User Not Found" });
    }
  })
);
userRouter.put(
  "/profile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try{
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updateUser = await user.save();
      res.send({
        _id: updateUser._id,
        name: updateUser.name,
        email: updateUser.email,
        isAdmin: updateUser.isAdmin,
        token: generateToken(updateUser),
      });
    } else {
      res.status(404).send({ msg: "User Not Found" });
    }
  }catch(err){
    console.log(err)
  }
  })
);

export default userRouter;
