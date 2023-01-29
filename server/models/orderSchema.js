const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    user : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    templateName : {
        type : String,
        required : true
    },
    orderValue : {
        type : String,
        required : true
    },
    paymentType : {
        type : String,
        required : true
    },
    // status : {
    //     type : String,
    //     required : true
    // }
})

module.exports = mongoose.model('Order',orderSchema)