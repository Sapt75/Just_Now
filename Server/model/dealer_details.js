const mongoose = require('mongoose');




const dealerDetails = new mongoose.Schema({
    brand_name:{
        type: String,
        required:true
    },
    state:{
        type: String,
        required:true
    },
    city_id:{
        type: Number,
        required:true
    },
    city_name:{
        type: String,
        required: true
    },
    dealer_name:{
        type: String,
        required: true
    },
    complete_address:{
        type: String,
        required: true
    },
    pincode:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }
}, {collection: 'dealer_details'})


const Dealer_Details = mongoose.model('DealerDetails', dealerDetails);

module.exports = Dealer_Details