const mongoose = require('mongoose')
const Schema = mongoose.Schema

const createPortfolio = new Schema({
    logoTitle : {
        type : String,
        // required : true
    },
    jobTitle : {
        type : String,
        // required : true
    },
    firstPara : {
        type : String,
        // required : true
    },
    secondPara : {
        type : String,
        // required : true
    },
    coverImageUrl : {
        type : String,
        // required : true
    },
    caption : {
        type : String,
        // required : true
    },
    linkedin : {type : String},
    github : {type : String},
    email : {type : String},
    contact : {type : String},
    portfolioUrl : {type : String},
    
    templateName : {type : String},
    templateCategory : {type : String},
    templatePrice : {type : String},

    
})

module.exports = mongoose.model('Portfolio',createPortfolio)