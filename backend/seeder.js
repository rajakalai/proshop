import mongoose from 'mongoose'
import dotenv from 'dotenv'
//
//import colors from 'colors'
//
import User from './models/UserModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
//
import products from './data/products.js'
import users from './data/users.js'
//
import connectDb from './config/db.js'
//
dotenv.config()

connectDb()

const importData = async() => {
    try {
        await Order.deleteMany() 
        await Product.deleteMany() 
        await User.deleteMany() 
        const createdUser = await User.insertMany(users);
        const adminUser = createdUser[0]._id
        const sampleProducts = products.map((product)=>{
            return {...product, user:adminUser}
        })
        await Product.insertMany(sampleProducts)
        console.log('Data Imported');
        Process.exit()
    } catch (error) {
        console.log(`${error}`); 
    }
}
//.red.inverse

const destroyData = async() => {
    try {
        await Order.deleteMany() 
        await Product.deleteMany() 
        await User.deleteMany() 
        console.log('Data Destroyed');
        Process.exit()
    } catch (error) {
        console.log(`${error}`); 
    }
}

if(process.argv[2] == "-d"){
    destroyData()
}else{
    importData()
}