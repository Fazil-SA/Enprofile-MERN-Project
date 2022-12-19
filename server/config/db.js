const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const connectToDb = async(cb) => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_ATLAS_URI)
        console.log(`mongodb connected`)
        cb()
    } catch (error) {
        // console.log(error)
    }
}

module.exports = connectToDb