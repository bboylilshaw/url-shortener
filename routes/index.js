var db = require('mongoose');
var URLModel = db.model('URL');

exports.index = function (req, res) {
    res.render('index', { title: 'Express' });
};

exports.shorten = function (req, res) {

    var originalUrl = req.body.url;
    var shortUrl = originalUrl + '_short'; //fake short url for now

    var url = new URLModel({
        originalUrl: originalUrl,
        shortUrl: shortUrl
    });

    URLModel.find({ originalUrl: originalUrl }, function (err, docs) {
        if (!err) {
            if (docs) { //already exist short url for the original url
                console.log('>>find() method invoked...')
                res.send({'status': 'ok', 'data': shortUrl});
            } else {
                url.save(function (err, url, numberAffected) {
                    console.log('>>url.save() method invoked...');
                    if (!err) {
                        console.dir(url);
                        res.send({'status': 'ok', 'data': shortUrl});
                    } else {
                        console.dir(err);
                        // Error handling
                        res.send({'status': 'error'});
                    }
                });
            }
        }
    });
};