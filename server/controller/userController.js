// import { createUser } from "../helpers/UserHelpers"
const  UserHelper  = require('../helpers/UserHelpers')    

const userRegister =  async(req,res) => {
    const userData = req.body
    // console.log(userData);
    try {
        const user = await UserHelper.createUser(userData)
        // RegisterUser.create(data)
        res.status(200).json({status:"user registered"})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {
    userRegister
}