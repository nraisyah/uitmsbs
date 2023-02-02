const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const numbook = new Schema({
    totalbook: {
        type: Number,
        required : true
    },
    mostbook:{
        type: String,
        required: true
    }
});

const numberBook = mongoose.model('NumBook' , numbook);
module.exports = numberBook;