require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 9000

const connectToDb = require('./config/db')

//express app
const app = express()

//middlewares
app.use(express.json())


//db listen
connectToDb(() => {
    app.listen(PORT , () => {
        console.log(`Server Started on Port ${PORT}`)
    })
})