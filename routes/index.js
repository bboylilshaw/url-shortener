var db = require('mongoose');
var URLModel = db.model('URL');

exports.index = function (req, res) {
    res.render('index', { title: 'Express' });
};

exports.shorten = function (req, res) {

//    var originalUrl = req.body.originalUrl;
//    var shortUrl = originalUrl + '_short';
//
//    var url = new URLModel({
//        originalUrl: originalUrl,
//        shortUrl: shortUrl,
//        generateDate: new Date()
//    });
//
//    url.save(function (err, url, numberAffected) {
//        console.log("url.save() invoked");
//        if (!err) {
//            console.dir(url);
//            res.redirect('/');
//        } else {
//            console.dir(err);
//            // Error handling
//            res.redirect('/error');
//        }
//    });
};