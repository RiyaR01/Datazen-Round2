const { number } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    Name: String,
    Phone: Number,
    Mail: { type: String, default: '' },
    institute:String,
    age:Number,
});

module.exports = mongoose.model('Customer', RegisterSchema);