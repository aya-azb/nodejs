const mongoose = require('mongoose');
let mongo_url = 'mongodb://localhost:27017/itinode';

if(process.env.NODE_ENV === 'production'){
    mongo_url = 'mongodb://admin:admin@ds251799.mlab.com:51799/itinode';
}

mongoose.connect(mongo_url);