const mongoose = require('mongoose');




const terms = new mongoose.Schema({
    content: String
}, {collection: 'Terms_Conditions'})


const Terms = mongoose.model('Terms', terms);

module.exports = Terms