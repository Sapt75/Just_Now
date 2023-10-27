const mongoose = require('mongoose');




const homePage = new mongoose.Schema({
    banner:{
        type: String,
        required:true
    },
    advertisement_image:{
        type: String,
        required:true
    },
    advertisement_link:{
        type: String,
        required:true
    },
    status: {
        type: Boolean,
        required: true
    }
    
}, {collection: 'Home_Page'})


const Home_Page = mongoose.model('HomePage', homePage);

module.exports = Home_Page