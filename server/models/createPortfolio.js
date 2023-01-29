const mongoose = require('mongoose')
const Schema = mongoose.Schema

const createPortfolio = new Schema({
    // logoTitle : {
    //     type : String,
    //     // required : true
    // },
    // jobTitle : {
    //     type : String,
    //     // required : true
    // },
    // firstPara : {
    //     type : String,
    //     // required : true
    // },
    // coverImageUrl : {
    //     type : String,
    //     // required : true
    // },
    // aboutDesc : {
    //     type : String,
    //     // required : true
    // },
    // linkedin : {type : String},
    // github : {type : String},
    // email : {type : String},
    // contact : {type : String},
    // portfolioUrl : {type : String},
    portfolioDetails: { },
    user: { },
    
})

module.exports = mongoose.model('Portfolio',createPortfolio)