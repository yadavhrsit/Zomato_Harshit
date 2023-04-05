var express = require('express');
var Authrouter = express.Router();
var jwt = require('jsonwebtoken');

Authrouter.use(function (req, res, next) {
    var token = req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, process.env.JWT_ACCESS_TOKEN,
            function (err, decoded) {
                if (err) {
                    let errordata = {
                        message: err.message,
                        expiredAt: err.expiredAt
                    };
                    console.log(errordata);
                    return res.status(401).json({
                        message: 'Unauthorized Access'
                    });
                }
                next();
            });
    } else {
        return res.status(403).json({
            message: 'Forbidden Access'
        });
    }
});

module.exports = Authrouter;