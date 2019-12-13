var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
var User = require('../models/user.model.js');

const secret = process.env.AUTH_SECRET;

router.post('/', (req, res) => {
    if (req.body.email && req.body.password) {
        User.authenticate(req.body.email, req.body.password, (error, user) => {
            if (error || !user) {
                return res.status(400).json({
                    message: error.message,
                    error: error
                });
            } else {
                req.session.email = user.email;

                const payload = { 
                    email: user.email,
                    username: user.username,
                    role: user.role,
                };

                const token = jwt.sign(payload, secret, {
                    expiresIn: '24h',
                });

                return res.status(200).json({
                    email: user.email,
                    username: user.username,
                    role: user.role,
                    auth_token: token,
                });
            }
        });
    } else {
        var err = new Error('All fields required.');
        return res.status(400).json({
            message: err.message,
            error: err
        });
    }
})

module.exports = router;
