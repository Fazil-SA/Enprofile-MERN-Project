const mongoose = require('mongoose')
const RegisterUser = require('../models/userSchema')

const createUser = (userData) => {
    return new Promise(async (resolve,reject) => {
        try {
            const user = await RegisterUser.create(userData)
            resolve(userData)
        }
        catch(error) {
            reject(error)
        }
    })
}
module.exports = {
    createUser
}