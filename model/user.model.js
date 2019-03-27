const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: Number,
        required: 'This field is required.'
    },
    workNo: {
        type: Number
    },
    homeNo: {
        type: Number
    },
    email: {
        type: String,
        required: 'This field is required.'
    }
});

mongoose.model('User', userSchema);