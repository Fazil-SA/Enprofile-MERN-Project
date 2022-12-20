const express = require('express')
const router = express.Router()

const {userRegister} = require('../controller/userController')

router.post('/register', userRegister) 

module.exports = router