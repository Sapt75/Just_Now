const mongoose = require('mongoose');




const privacyPolicy = new mongoose.Schema({
    content: String
}, {collection: 'Privacy_Policy'})


const Privacy_Policy = mongoose.model('PrivacyPolicy', privacyPolicy);

module.exports = Privacy_Policy