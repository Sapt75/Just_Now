const mongoose = require('mongoose');
const moment = require('moment-timezone');
// const dateindia = moment.tz("2014-06-01 12:00", "Asia/Kolkata");
const dateindia = moment().tz("Asia/Kolkata").format();
// var today = new Date();
// var todaydate = today.toDateString();


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    pincode:{
        type: Number,
        required:true
    },
    date: { 
        type: Date, 
        default: dateindia
    }
    // ,
    // fullname: {
    //     firstName: { type: String },
    //     lastName: { type: String }
    //   }
}
,
// { timestamps: true }
)

const User = mongoose.model('USER', userSchema);

module.exports = User;