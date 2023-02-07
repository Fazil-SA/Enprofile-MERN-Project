const mongoose = require('mongoose')
const Admin = require('../models/adminSchema')
const User = require('../models/userSchema')
const Product = require('../models/productSchema')
const Portfolio = require('../models/createPortfolio')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')

const findAdmin = (loginData) => {
    return new Promise(async (resolve,reject) => {
        try {
            const {email,password} = loginData
            const admin = await Admin.findOne({email})
            if(admin && (await bcrypt.compare(password, admin.password))) {
                resolve(admin)
            } else {
                reject({err:"wrong credentials!!"})
            }

            // const salt = await bcrypt.genSalt(10)
            // const hashedPassword = await bcrypt.hash(password, salt)
            // Admin.create({
            //     email:email,
            //     password:hashedPassword
            // })
        } catch (error) {
            reject(error)
        }
    })
}

const getUsers = () => {
    return new Promise(async (resolve,reject) => {
        try {
            const users = await User.find()
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}

const blockStatus = (id) => {
    return new Promise(async (resolve,reject) => {
        try {
            const userId = id.data
            const user = await User.findById(userId)
            // console.log(user)
            if(user.active){
                const blockUser = await User.findByIdAndUpdate(id.data,{active:false})
                resolve(blockUser)
            } else {
                const blockUser = await User.findByIdAndUpdate(id.data,{active:true})
                resolve(blockUser)
            }
        } catch (error) {
            reject(error)
        }
    })
}
const addProduct = (data) => {
    return new Promise(async (resolve,reject) => {
        try {
            const newProduct = await Product.create({
                name:data.tempName,
                category:data.category,
                price:data.price,
                imageUrl:data.imageDisplayUrl,
                redirectUrl:data.url
            })
            resolve(newProduct)
        } catch (error) {
            reject(error)
        }
    })
}

const getAllProducts = () => {
    return new Promise(async (resolve,reject) => {
        try {
            const prod = await Product.find()
            resolve(prod)
        } catch (error) {
            reject(error)
        }
    })
}

const deleteProduct = (prodId) => {
    return new Promise(async (resolve,reject) => {
        try {
            const id = prodId.prodId
            const deleteProd = await Product.findByIdAndDelete(id)
            resolve(deleteProd)
        } catch (error) {
            reject(error)
        }
    })
}

const editProduct = (prodId) => {
    return new Promise(async (resolve,reject) => {
        try {
            const id = prodId.prodId
            const result = await Product.findById(id)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

const updateProduct = (data) => {
    return new Promise(async (resolve,reject) => {
        try {
            const upData = data
            const result = await Product.findByIdAndUpdate(upData.id,upData)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

const allOrders = () => {
    return new Promise(async (resolve,reject) => {
        try {
            const result = await Portfolio.find()
            console.log('orders:', result);
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    findAdmin,
    getUsers,
    blockStatus,
    addProduct,
    getAllProducts,
    deleteProduct,
    editProduct,
    updateProduct,
    allOrders
}


//fazilsa123
// Admin Creation
// const salt = await bcrypt.genSalt(10)
// const hashedPassword = await bcrypt.hash(password, salt)
// Admin.create({
//     email:email,
//     password:hashedPassword
// })