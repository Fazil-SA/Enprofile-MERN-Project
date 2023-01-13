const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const AdminHelpers = require('../helpers/AdminHelpers')
require('dotenv').config()
// import cloudinary from "cloudinary/lib/cloudinary";
const cloudinary = require('cloudinary')
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

const asyncHandler = require('express-async-handler')

const adminLogin = asyncHandler(async (req,res) => {
    try {
        const loginData = req.body
        const adminExists = await AdminHelpers.findAdmin(loginData)
        res.status(200).json({status:'Admin Login Successful'})
    } catch (error) {
        res.json({status:'wrong credentials!!'})
    }
})

const userCrud = asyncHandler(async (req,res) => {
    try {
        const userList = await AdminHelpers.getUsers()
        res.status(200).json(userList)
    } catch (error) {
        console.log(error)
    }
}) 

const blockUserStatus = asyncHandler(async (req,res) => {
    try {
        const id = req.body
        const updateData = await AdminHelpers.blockStatus(id)
        res.status(200).json({isActive : 'status updated'})
    } catch (error) {
        console.log(error)
    }
}) 

const addProduct = asyncHandler(async (req,res) => {
    try {
        const data = req.body
        const addProduct = await AdminHelpers.addProduct(data)
        res.status(200).json({status:"product added"})
    } catch (error) {
        console.log(error);
    }
})

const imgRemove = asyncHandler(async (req,res) => {
    try {
        const publicId = req.body.clPublicId
        cloudinary.v2.uploader.destroy(publicId, function(error,result) {
            console.log(result, error) })
            res.json({status:'img removed'})
    } catch (error) {
        console.log(error)
    }
})

const getAllProducts = asyncHandler(async (req,res) => {
    try {
        const allProducts = await AdminHelpers.getAllProducts()
        res.status(200).json(allProducts)
    } catch (error) {
        console.log(error)
    }
})

const deleteProduct = asyncHandler(async (req,res) => {
    try {
        const prodId = req.body
        const deleted = await AdminHelpers.deleteProduct(prodId)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error)
    }
})

const editProduct = asyncHandler(async (req,res) => {
    try {
        const prodId = req.body
        const editProd = await AdminHelpers.editProduct(prodId)
        res.status(200).json(editProd)
    } catch (error) {
        console.log(error)
    }
})


const updateProduct = asyncHandler(async (req,res) => {
    try {
        const data = req.body
        const updateProd = await AdminHelpers.updateProduct(data)
        res.status(200).json({status:'updated'})
    } catch (error) {
        console.log(error)
    }
})



module.exports = {
    adminLogin,
    userCrud,
    blockUserStatus,
    addProduct,
    imgRemove,
    getAllProducts,
    deleteProduct,
    editProduct,
    updateProduct,
}