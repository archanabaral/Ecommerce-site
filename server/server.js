import express from "express"
import dotenv from "dotenv"

//load env variables
dotenv.config({ path: "./config/config.env" });


const app = express()

const port= process.env.PORT || 4000
app.listen(port, () =>{
    console.log(`server running at port ${port}`)
})
