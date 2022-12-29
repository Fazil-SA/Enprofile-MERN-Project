require('dotenv').config()
const express = require('express')
// const mongoose = require('mongoose')
const PORT = process.env.PORT || 9000
const cors = require('cors')

const connectToDb = require('./config/db')
const userRouter = require('./routes/userRouter')

//express app
const app = express()

//middlewares

app.use(express.json())
app.use(cors())

//routes
app.use(userRouter)

//db listen
connectToDb(() => {
    app.listen(PORT , () => {
        console.log(`Server Started on Port ${PORT}`)
    })
})

module.exports = app