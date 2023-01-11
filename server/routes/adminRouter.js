const express = require('express')
const router = express.Router()

const { adminLogin , userCrud , blockUserStatus ,addProduct} = require('../controller/adminController')


router.post('/adminLogin', adminLogin)

router.post('/admin/userCrud', userCrud)

router.put('/admin/userCrud', blockUserStatus)

router.post('/admin/addProduct',addProduct)


module.exports = router