var Auth = require('../../modules/auth');

exports.create = function(req, res, next) {
    var auth = new Auth();
    auth.username = req.body.username;
    auth.password = req.body.password;
    console.log(req.body);
    auth.date = new Date();
    auth.is_active =true;

    auth.save(function(err,data){
        if(err){
            console.log('Error Error Error did not save to db: ' + err);
            res.send(404, "Error with db");
        } else {
            res.json(201, {status: "success"});
        }
        return next();
    })
}