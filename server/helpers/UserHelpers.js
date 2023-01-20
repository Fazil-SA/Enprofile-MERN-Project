const mongoose = require('mongoose')
const RegisterUser = require('../models/userSchema')
const Products = require('../models/productSchema')
const Portfolio = require('../models/createPortfolio')
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
                if(user.active){
                    resolve(user)
                } else {
                    reject({err:"user is blocked!!"})
                }
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

const portfolioTemplates = () => {
    return new Promise(async (resolve,reject) => {
        try {
            const portfolio = await Products.find({category:'portfolio'})
            resolve(portfolio)
        } catch (error) {
            reject(error)
        }
    })
}

const ecommerceTemplates = () => {
    return new Promise(async (resolve,reject) => {
        try {
            const ecommerce = await Products.find({category:'ecommerce'})
            resolve(ecommerce)
        } catch (error) {
            reject(error)
        }
    })
}

const landingTemplates = () => {
    return new Promise(async (resolve,reject) => {
        try {
            const landing = await Products.find({category:'landingpage'})
            resolve(landing)
        } catch (error) {
            reject(error)
        }
    })
}

const createPortfolioNewUser = (portfolioCreationData) => {
    return new Promise(async (resolve,reject) => {
        try {
            const portUrl = await Portfolio.create(portfolioCreationData)
            resolve(portUrl)
        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
    createUser,
    loginUser,
    findUser,
    portfolioTemplates,
    ecommerceTemplates,
    landingTemplates,
    createPortfolioNewUser
}