const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userAddForm = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    role: {
        type: String,
        required: true
    }
},
{ timestamps: true }
)

// We are hashing the password 

userAddForm.pre('save', async function (next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

const Admin = mongoose.model('ADMIN', userAddForm);

module.exports = Admin;