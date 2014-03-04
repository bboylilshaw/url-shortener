var mongoose = require('mongoose');

var URLSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true, index: true, unique: true },
    shortUrl: { type: String, required: true },
    generateDate: Date
});

var collectionName = 'url';

module.exports = mongoose.model('URL', URLSchema, collectionName);