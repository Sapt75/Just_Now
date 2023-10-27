const mongoose = require('mongoose');




const model_Price = new mongoose.Schema({
    model_id:{
        type: Number,
        required:true
    },
    min_price:{
        type: Number,
        required:true
    },
    max_price:{
        type: Number,
        required:true
    },
    min_mileage:{
        type: Number,
        required:true
    },
    max_mileage:{
        type: Number,
        required:true
    },
    min_engine:{
        type: Number,
        required:true
    },
    max_engine:{
        type: Number,
        required:true
    },
    rating:{
        type: Number,
        required:true
    },
    brand: {
        type: String,
        required: true
    },
    youtube: {
        type: Object,
        required: true
    }
}, {collection: 'model_price_ranges'})


const Model_Prices = mongoose.model('ModelPrices', model_Price);

module.exports = Model_Prices