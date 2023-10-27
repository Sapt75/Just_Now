const mongoose = require('mongoose');




const version_Price = new mongoose.Schema({
    model_id:{
        type: Number,
        required:true
    },
    version_Id:{
        type: Number,
        required: true
    },
    version_name:{
        type: String,
        required: true
    },
    min_price:{
        type: Number,
        required:true
    },
    max_price:{
        type: Number,
        required:true
    },
    carname: {
        type: String,
        required: true
    }
}, {collection: 'version_price_ranges'})


const Version_Prices = mongoose.model('VersionPrices', version_Price);

module.exports = Version_Prices