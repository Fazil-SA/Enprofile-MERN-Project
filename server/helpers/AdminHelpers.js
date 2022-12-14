const mongoose = require('mongoose')
const Admin = require('../models/adminSchema')
const User = require('../models/userSchema')
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

module.exports = {
    findAdmin,
    getUsers,
    blockStatus
}


//fazilsa123
// Admin Creation
// const salt = await bcrypt.genSalt(10)
// const hashedPassword = await bcrypt.hash(password, salt)
// Admin.create({
//     email:email,
//     password:hashedPassword
// })