const mongoose = require('mongoose');
const DB = process.env.DATABASE
mongoose.connect(DB,
        {
        
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useNewUrlParser: true,
        // useCreateINdex: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false
    }
    ).then(() =>{
        console.log(`Database Connection Successful`);
    }).catch((err)=> console.log(`Database Connection Failed`));