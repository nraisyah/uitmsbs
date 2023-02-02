const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courtsList = new Schema({
    courtname: {
        type: String,
        required : true
    },
    status:{
        type: Boolean,
        required: true
    },
    NoB:{
        type: Number,
        required : true
    }
});

const Courts = mongoose.model('Courts' , courtsList);
module.exports = Courts;