var Emails = require('../models/emails');

modules.get = function(req, res, next){
    Emails.find().limit(10).exec(function(err,data){
        if(err){res.send('Error;');}
        else {
            res.json(data);
        }
    });
    return next();
}