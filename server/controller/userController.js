const mongoose = require('mongoose')
const RegisterUser = require('../models/userSchema')
    
const userRegister =  async(req,res) => {
    const data = req.body
    // console.log(data);
    try {
        RegisterUser.create(data)
        res.status(200).json({status:"user registered"})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {
    userRegister
}