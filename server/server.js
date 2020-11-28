import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRouter from "./routes/productRoute.js";

//load env variables
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

const app = express()

//route
app.use('/api/products',productRouter)

const port= process.env.PORT || 4000
app.listen(port, () =>{
    console.log(`server running at port ${port}`)
})
