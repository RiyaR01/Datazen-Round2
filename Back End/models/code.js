const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codeSchema = new Schema({
    code: String,
    per: String
});

module.exports = mongoose.model('Code', codeSchema);