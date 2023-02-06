require('dotenv').config()
const express = require('express')
// const mongoose = require('mongoose')
const PORT = process.env.PORT || 9000
const cors = require('cors')
const path = require('path');

const connectToDb = require('./config/db')
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')

//express app
const app = express()

//middlewares

app.use(express.json())
app.use(cors())


// Making Build Folder as Public 
app.use(express.static(path.join(__dirname, '../client/dist/')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });


//routes
app.use(userRouter)
app.use(adminRouter)

//db listen
connectToDb(() => {
    app.listen(PORT , () => {
        console.log(`Server Started on Port ${PORT}`)
    })
})

module.exports = app