const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://someuser:someuser@crudapp-wgmt2.mongodb.net/PhoneDirectory?retryWrites=true', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./user.model');