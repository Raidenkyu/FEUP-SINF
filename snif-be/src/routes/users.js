const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const secret = process.env.AUTH_SECRET;
const User = require('../models/user.model.js');

router.post('/', (req, res) => {
    if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords dont match");
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    }

    if (req.body.email &&
        req.body.username &&
        req.body.role &&
        req.body.password &&
        req.body.passwordConf) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,
        }

        User.create(userData, (error) => {
            if (error) {
                res.status(error.status || 500);
                res.json({
                    message: error.message,
                    error: error
                });
            } else {
                res.status(200);
                res.json({
                    message: "User created with success"
                });
            }
        });

    } else {
        const err = new Error('All fields required.');
        err.status = 400;
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    }
});

router.get("/", (req, res) => {
    if (req.session.email) {
        User.findOne({ email: req.session.email }).exec((err, user) => {
            if (err) {
                return res.status(404).json({
                    message: err.message,
                    error: err
                });
            }
            else {
                return res.status(200).json({
                    email: user.email,
                    username: user.username,
                    role: user.role,
                });
            }
        });
    }
    else {
        const err = new Error("No user logged in");
        return res.status(404).json({
            message: err.message,
            error: err
        });
    }
});

router.get("/token", (req, res) => {
    const token = req.headers.auth_token;
    if (!token) {
        return res.status(401).send({
            message: 'Unauthorized: No token provided'
        });
    } else {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: 'Unauthorized: Invalid token',
                });
            } else {
                return res.status(200).json({
                    message: "Authorized: Valid token",
                    user: decoded,
                })
            }
        });
    }
});

module.exports = router;
