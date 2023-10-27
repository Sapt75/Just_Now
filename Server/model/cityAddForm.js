const mongoose = require('mongoose');


const cityAddForm = new mongoose.Schema({
    // name:{
    //     type: String,
    //     required:true
    // },
    // phone:{
    //     type: Number,
    //     required:true
    // },
    city:{
        type: String,
        required:true
    }
    // ,
    // pincode:{
    //     type: Number,
    //     required:true
    // }
})

const City = mongoose.model('CITY', cityAddForm);

module.exports = City;

// const cities = mongoose.model('cities', cityAddForm);

// module.exports = cities;