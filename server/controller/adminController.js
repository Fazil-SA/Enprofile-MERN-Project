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
        console.log(data);
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

module.exports = {
    adminLogin,
    userCrud,
    blockUserStatus,
    addProduct,
    imgRemove
}