const express = require('express')
const router = express.Router()

const {userRegister ,userLogin, getProductsByCategory, portfolioCreation, paymentSuccess, templateRender, orderCrudDisplay, editWebsite, updateCreation, deleteWebsite} = require('../controller/userController')

const { protect } = require('../middleware/authMiddleware')

router.post('/register', userRegister) 

router.post('/login', userLogin)

router.post('/user/templateCards',getProductsByCategory)

router.post('/template-rendering', templateRender)

router.post('/create-portfolio-user-data-upload', protect, portfolioCreation)

router.post('/update-portfolio-user-data', protect, updateCreation)

router.get('/displayOrders', protect, orderCrudDisplay)

router.post('/edit-website', protect, editWebsite)

router.post('/delete-website', protect, deleteWebsite)

// router.post('/create-checkout-session', protect, stripePayment)

router.post('/payment-success', protect, paymentSuccess)



router.get('/me',(req,res)=>{
    res.json({message :'hello'})
})

module.exports = router