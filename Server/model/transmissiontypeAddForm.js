const mongoose = require('mongoose');


const transmissiontypeAddForm = new mongoose.Schema({
    transmissiontype:{
        type: String,
        required:true
    }
})

const Transmissiontype = mongoose.model('TRANSMISSIONTYPE', transmissiontypeAddForm);

module.exports = Transmissiontype;