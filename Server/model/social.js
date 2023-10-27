const mongoose = require('mongoose');




const social = new mongoose.Schema({
    facebook:{
        type: String,
        required:true
    },
    twitter:{
        type: String,
        required: true
    },
    instagram:{
        type: String,
        required: true
    },
    youtube:{
        type: String,
        required:true
    }
}, {collection: 'social'})


const Social = mongoose.model('Social', social);

module.exports = Social