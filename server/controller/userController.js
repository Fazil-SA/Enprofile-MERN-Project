const  UserHelper  = require('../helpers/UserHelpers')   
const jwt = require('jsonwebtoken')

const asyncHandler = require('express-async-handler') 

const userRegister =  asyncHandler(async (req,res) => {
    try {
        const userData = req.body

        //check if user exists
        const userExists = await UserHelper.findUser(userData)
        if(userExists) {
            res.status(400)
            throw new Error('User email already registered')
        } else {
            //Create User
            const user = await UserHelper.createUser(userData)
            if(user) {
                res.status(200).json({status:"user registered"})
            } else {
                throw new Error('Invalid Credentials')
            }
        }  
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

const userLogin = asyncHandler( async(req,res) => {
    try {
        const loginData = req.body
        if(loginData.email =='' && loginData.password == '') {
            res.json({err:"no login data"})
        }
        //Check for user email
        const user = await UserHelper.loginUser(loginData)
        res.status(200).json({
            status:"User Logined Successfully",
            id : user.id,
            name : user.name,
            email : user.email,
            token : generateToken(user._id)
            })  
    } catch (error) {
        res.status(400).json(error.err)
        throw new Error("Invalid Credentials")
    }
})

const generateToken = (id) => {
    return jwt.sign({ id } , process.env.JWT_SECRET , {expiresIn: '30d'})
}

module.exports = {
    userRegister,
    userLogin,
}