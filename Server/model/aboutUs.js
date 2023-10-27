const mongoose = require('mongoose');




const aboutus = new mongoose.Schema({
    content: String
}, {collection: 'About_Page'})


const About_US = mongoose.model('AboutUs', aboutus);

module.exports = About_US