require("dotenv").config()
const  UserHelper  = require('../helpers/UserHelpers')   
const jwt = require('jsonwebtoken')
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_KEY)

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
        console.log(error)
        res.status(400).json({error : error.message})
    }
})

const userLogin = asyncHandler( async(req,res) => {
    try {
        const loginData = req.body
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
    }
})

const generateToken = (id) => {
    return jwt.sign({ id } , process.env.JWT_SECRET , {expiresIn: '30d'})
}

const getProductsByCategory = asyncHandler(async (req,res) => {
    try {
        const portfolio = await UserHelper.portfolioTemplates()
        const ecommerce = await UserHelper.ecommerceTemplates()
        const landing = await UserHelper.landingTemplates()
        res.status(200).json([portfolio,ecommerce,landing])
    } catch (error) {
        console.log(error)
    }
})

const portfolioCreation = asyncHandler(async (req,res) => {
    try {
        const portfolioCreationData = req.body.datas.data
        const purchasedTemplateData = req.body.datas.purchasedTemplate
        // console.log(purchasedTemplateData)
        const user = req.user
        const price = purchasedTemplateData.price
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                  price_data: {
                    currency: "inr",
                    product_data: {
                      name: "enprofile",
                    },
                    unit_amount: price * 100,
                  },
                  quantity: 1,
                },
              ],
              mode: "payment",  
              success_url: `${process.env.CLIENT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}&user_id=${user._id}`,
              cancel_url: `${process.env.CLIENT_URL}/payment-failed`,
            });
      
            res.json({ url: session.url });
            } catch (error) {
              console.log(error);
            }




        // const response = await UserHelper.createPortfolioNewUser({portfolioCreationData,user})
        // res.status(200).json({status:'url generated',portUrl : response.portfolioUrl})
    
})

// const stripePayment = asyncHandler(async (req,res) => {
//     try {
//         const session = await stripe.checkout.sessions.create({
//             line_items: [
//               {
//                 // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//                 price: '{{PRICE_ID}}',
//                 quantity: 1,
//               },
//             ],
//             mode: 'payment',
//             success_url: `${process.env.CLIENT_URL}?success=true`,
//             cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
//           });
        
//           res.redirect({url :session.url});
//     } catch (error) {
//         console.log(error)
//     }
// })

const paymentSuccess = asyncHandler(async (req,res) => {
    try {
        const successUrl = req.body.datas.successUrl;
        const url = new URL(successUrl);
        const sessionId = url.searchParams.get("session_id");
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        // console.log(session.status); // "succeeded" or "canceled"
        
        const portfolioCreationData = req.body.datas.portfolioCreationData
        const purchasedTemplateData = req.body.datas.purchasedTemplateData
        // console.log(portfolioCreationData, purchasedTemplateData)
        
        if (session.status === "complete") {
          const response = await UserHelper.createPortfolioNewUser({portfolioCreationData, purchasedTemplateData})
          res.status(200).json({status:'Payment Successful'})
        //   console.log("payment is successful ");
        //   console.log(portfolioCreationData,purchasedTemplateData)
        } else {
          console.log('Payment Not Successful')
        }

    } catch (error) {
        console.log(error)
    }
})

module.exports = {
    userRegister,
    userLogin,
    getProductsByCategory,
    portfolioCreation,
    paymentSuccess
}