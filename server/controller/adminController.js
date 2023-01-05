const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const AdminHelpers = require('../helpers/AdminHelpers')

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

module.exports = {
    adminLogin,
    userCrud
}