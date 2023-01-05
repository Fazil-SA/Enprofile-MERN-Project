const express = require('express')
const router = express.Router()

const { adminLogin , userCrud } = require('../controller/adminController')


router.post('/adminLogin', adminLogin)

router.post('/admin/userCrud',userCrud)



module.exports = router