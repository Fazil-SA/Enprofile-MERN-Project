const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    },
    redirectUrl : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Product',productSchema)