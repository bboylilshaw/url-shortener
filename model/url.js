var mongoose = require('mongoose');

var URLSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true, index: true, unique: true },
    shortUrl: { type: String, required: true, index: true, unique: true },
    generateDate: { type: Date, default: Date.now() },
    hits: { type: Number, default: 0 }
});

var collectionName = 'url';

module.exports = mongoose.model('URL', URLSchema, collectionName);