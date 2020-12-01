import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";

//load env variables
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
  next();
});
// eslint-disable-next-line no-undef
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
