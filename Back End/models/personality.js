const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalitySchema = new Schema({
    question: String,
    category: String,
    answer: String
});

module.exports = mongoose.model('Personality', personalitySchema);