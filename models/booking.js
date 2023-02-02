const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booking = new Schema({
    Name: {
        type: String,
        required : true
    },
    SID:{
        type: String,
        required: true
    },
    phoneNum:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    Court:{
        type: String,
        required: true
    },
    DateTimeStart:{
        type: Date,
        required: true
    },
    Details:{
        type: String,
        required: true
    },
    Approval:{
        type: Boolean,
        required: true
    },
    Duration:{
        type: Number,
        required: true
    }

});

const Book = mongoose.model('Booking' , booking);
module.exports = Book;