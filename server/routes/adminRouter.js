const express = require('express')
const router = express.Router()

const { adminLogin , userCrud , blockUserStatus } = require('../controller/adminController')


router.post('/adminLogin', adminLogin)

router.post('/admin/userCrud', userCrud)

router.put('/admin/userCrud', blockUserStatus)



module.exports = router