const express = require('express')
const router = express.Router()

const { adminLogin , userCrud , blockUserStatus ,addProduct , imgRemove ,getAllProducts, deleteProduct, editProduct, updateProduct, orders} = require('../controller/adminController')


router.post('/adminLogin', adminLogin)

router.post('/admin/userCrud', userCrud)

router.put('/admin/userCrud', blockUserStatus)

router.post('/admin/productCrud', getAllProducts)

router.post('/admin/deleteProduct' , deleteProduct)

router.post('/admin/editProduct' , editProduct)

router.post('/admin/addProduct',addProduct)

router.post('/admin/updateProduct',updateProduct)

router.post('/admin/imageRemoveCl',imgRemove)

router.get('/admin/orders',orders)


module.exports = router