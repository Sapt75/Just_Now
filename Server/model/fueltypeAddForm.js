const mongoose = require('mongoose');


const fueltypeAddForm = new mongoose.Schema({
    fueltype:{
        type: String,
        required:true
    }
})

const Fueltype = mongoose.model('FUELTYPE', fueltypeAddForm);

module.exports = Fueltype;