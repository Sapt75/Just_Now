const mongoose = require('mongoose');




const modelPage = new mongoose.Schema({
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
    },
    pros: {
        type: String,
        required: true
    },
    cons: {
        type: String,
        required: true
    }
    
}, {collection: 'Model_Page'})


const Model_Page = mongoose.model('ModelPage', modelPage);

module.exports = Model_Page