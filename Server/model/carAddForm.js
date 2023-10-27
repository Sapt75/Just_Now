const mongoose = require('mongoose');


const carAddForm = new mongoose.Schema({
    // 1
    carname:{
        type: String,
        required:true
    },
    // 2
    modelname:{
        type: String,
        required:true
    },
    // 3
    category:{
        type: String,
        required:true
    },
    // 4
    ratings:{
        type: Number,
        required:true
    },
    // 5
    noofseats:{
        type: Number,
        required:true
    },
    // 6
    minprice:{
        type: Number,
        required:true
    },
    // 7
    maxprice:{
        type: Number,
        required:true
    },
    // 8
    mileage:{
        type: Number,
        required:true
    },
    // 9
    engine:{
        type: Number,
        required:true
    },
    // 10
    fueltype:{
        type: String,
        required:true
    },
    // 11
    transmission:{
        type: String,
        required:true
    },
    // 12
    seotitle:{
        type: String,
        required:true
    },
    seokeywords:{
        type: String,
        required:true
    },
    metadescription:{
        type: String,
        required:true
    },
    latestupdates:{
        type: String,
        required:true
    },
    mileagedescription:{
        type: String,
        required:true
    },
    colordescription:{
        type: String,
        required:true
    },
    prosInputBox1:{
        type: String,
        required:true
    },
    prosInputBox2:{
        type: String,
        // required:true
    },
    prosInputBox3:{
        type: String,
        // required:true
    },
    prosInputBox4:{
        type: String,
        // required:true
    },
    prosInputBox5:{
        type: String,
        // required:true
    },
    cons:{
        type: String,
        required:true
    },
    // fullname: {
    //     firstName: { type: String },
    //     lastName: { type: String }
    //   },
    mileage_obj:{
        fuel: { type: String },
        transmission: { type: String },
        mileage: { type: String },
        cc: { type: String }
    },
    variants_obj:{
        name: { type: String },
        fuel: { type: String },
        mileage: { type: String },
        price: { type: String },
        transmission: { type: String },
        cc: { type: String }
    },
    pricesincities_obj:{
        city: { type: String },
        price: { type: String }
    },
    colors:{
        type: String,
        required:true
    },
    videolinks:{
        type: String,
        required:true
    },
    // images:{
    //     type: Number,
    //     required:true
    // }
})

const Car = mongoose.model('CAR', carAddForm);

module.exports = Car;