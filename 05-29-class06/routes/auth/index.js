var Auth = require('../../models/auth');

exports.create = function(req, res, next) {
    var auth = new Auth ();
    auth.username = req.params.username;
    auth.password = req.params.password;
    auth.date = new Date();
    auth.is_active =true;

    auth.save
}