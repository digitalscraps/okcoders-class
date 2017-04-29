var Auth = require('../../modules/auth');
var bycrypt =require('bcrypt');
const saltRounds =2;

exports.create = function(req, res, next) {
    var auth = new Auth();
    var user = req.body.username;
    var pass = req.body.password;

    if(!user || !pass){
        res.send(404, "Username or password missing");
    }

    bcrypt.hash(pass, saltRounds, function(err,hash){
        if(err){
            console.log(err);
            console.log(err);
            res.send(404);
        } else {
            auth.username = user;
            auth.password = hash;
            auth.date = new Date();
            auth.is_active =true;

        auth.save(function(err,data){
            if(err){
                console.log('Error Error Error did not save to db: ' + err);
                res.send(404, "Error with db");
            } else {
                res.json(201, {status: "success"});
            }
            });
            return next();
        }
        });
}
