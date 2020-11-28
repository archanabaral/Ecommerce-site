import express from "express"
import data from "../data.js"
import Product from "../models/productModel.js"

const productRouter = express.Router()

//seed data to database
productRouter.get('/seed', async(req,res) =>{
     const seedProducts= await Product.insertMany(data.products)
     res.send(seedProducts)
})

//to gel all data
productRouter.get('/', async(req,res) =>{
     const products= await Product.find({})
     res.send(products)
})

//to get single data
productRouter.get('/:id', async(req,res)=>{
     const product = await Product.findById(req.params.id)
     if(product){
          res.send(product)
     }
     else{
          res.status(404).send({message:'Product Not Found'})
     }
})
export default productRouter
