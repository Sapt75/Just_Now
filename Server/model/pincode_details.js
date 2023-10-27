const mongoose = require('mongoose');




const pincodeDetails = new mongoose.Schema({
    pincode:{
        type: Number,
        required:true
    },
    postoffice_name:{
        type: String,
        required:true
    },
    City:{
        type: String,
        required:true
    },
    State:{
        type: String,
        required: true
    }
}, {collection: 'pincode_list'})


const Pincode_Details = mongoose.model('PincodeDetails', pincodeDetails);

module.exports = Pincode_Details