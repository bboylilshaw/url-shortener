var mongoose = require('mongoose');

var URLSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true, index: true },
    shortUrl: { type: String, required: true, index: true },
    generateDate: Date
});

var collectionName = 'url';

module.exports = mongoose.model('URL', URLSchema, collectionName);