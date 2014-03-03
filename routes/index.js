/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express' });
};

exports.shorten = function (req, res) {
    res.write('url shortened');
};