const mongoose = require('mongoose');




const cityDetails = new mongoose.Schema({
    City_ID:{
        type: Number,
        required:true
    },
    City_Name:{
        type: String,
        required:true
    },
    State_Name:{
        type: String,
        required:true
    }
    
}, {collection: 'cities_new'})


const City_Details = mongoose.model('CityDetails', cityDetails);

module.exports = City_Details