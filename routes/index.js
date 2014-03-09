var db = require('mongoose');
var URLModel = db.model('URL');

exports.index = function (req, res) {
    res.render('index', { title: 'Express' });
};

exports.shorten = function (req, res) {

    var originalUrl = req.body.url;
    var shortUrl = originalUrl + '_short';
    console.log(originalUrl);
    console.log(shortUrl);
    console.log(new Date());

    var url = new URLModel({
        originalUrl: originalUrl,
        shortUrl: shortUrl,
        generateDate: new Date()
    });

    url.save(function (err, url, numberAffected) {
        console.log("url.save() invoked");
        if (!err) {
            console.dir(url);
            var resp = {'status': 'ok', 'data': shortUrl};
            res.send(resp);
        } else {
            console.dir(err);
            // Error handling
            res.send({'status': 'error'});
        }
    });
};