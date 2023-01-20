const express = require('express')
const router = express.Router()

const {userRegister ,userLogin, getProductsByCategory, portfolioCreation} = require('../controller/userController')

const { protect } = require('../middleware/authMiddleware')

router.post('/register', userRegister) 

router.post('/login', userLogin)

router.post('/user/templateCards',getProductsByCategory)

router.post('/create-portfolio-user-data-upload',portfolioCreation)

router.get('/me',(req,res)=>{
    res.json({message :'hello'})
})

module.exports = router