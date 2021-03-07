import express from 'express'
import asyncHandler from 'express-async-handler' 
import mongoose from 'mongoose';
const router = express.Router()
import Product from '../models/productModel.js'

//@desc fetch all products
//@route GET /api/products
//access Public
router.get('/', asyncHandler(async(req, res)=>{ 
    const products = await Product.find({})
    // res.status(404);
    // throw new Error('not authorised')
    res.json(products);
}))
//
//@desc fetch single products
//@route GET /api/products/:id
//access Public
router.get('/:id', asyncHandler(async(req, res)=>{ 
    //const product = products.find(p=>p._id === req.params.id)
    //console.log("produt", product)
    const product = await Product.findById(req.params.id)

        if(product ){
            res.json(product);
        }else{
            res.status(404)
            throw new Error('Product Not Found')
        }
    
}))

export default router;