const mongoose = require('mongoose')
const RegisterUser = require('../models/userSchema')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')

const createUser = (userData) => {
    return new Promise(async (resolve,reject) => {
        try {
            const {userName ,email ,mobile ,password} = userData
            //Hash Passwords
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const user = await RegisterUser.create({userName,email,mobile,password:hashedPassword})
            resolve(userData)
        }
        catch(error) {
            reject(error)
        }
    })
}

const loginUser = (loginData) => {
    return new Promise(async (resolve,reject) => {
        try {
            const {email,password} = loginData
            const user = await RegisterUser.findOne({email})
            if(user && (await bcrypt.compare(password, user.password))) {
                resolve(user)
            } else {
                reject({err:"wrong credentials!!"})
            }
        } catch (error) {
            reject(error)
        }
    })
}

// const loginUser = (userData) => {
//     return new Promise(async (resolve,reject) => {
//         try {
//             const {userName ,email ,mobile ,password} = userData
//             const user = await RegisterUser.findOne({email})
//             resolve(user)  
//         }catch(error){
//             reject(error)
//         }
//     })
// }

const findUser = (userData) => {
    return new Promise(async (resolve,reject) => {
        try {
            const {userName ,email ,mobile ,password} = userData
            const user = await RegisterUser.findOne({email})
            resolve(user)  
        }catch(error){
            reject(error)
        }
    })
}

module.exports = {
    createUser,
    loginUser,
    findUser
}