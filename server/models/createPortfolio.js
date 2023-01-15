const mongoose = require('mongoose')
const Schema = mongoose.Schema

const createPortfolio = new Schema({
    logoTitle : {
        type : String,
        required : true
    },
    jobTitle : {
        type : String,
        required : true
    },
    firstPara : {
        type : String,
        required : true
    },
    coverImageUrl : {
        type : String,
        required : true
    },
    aboutDesc : {
        type : String,
        required : true
    },
    works : [{
        projectLink : {type : String},
        githubLink : {type : String},
        coverImageUrl : {type : String}
    }],
    experience : [{
        title : {type : String},
        iconImageUrl : {type : String}
    }],
    contact : [{
        email : {type : String},
        phone : {type : String}
    }]
})

module.exports = mongoose.model('Portfolio',createPortfolio)