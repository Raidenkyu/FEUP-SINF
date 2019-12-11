const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId
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
                err.status = 404;
                res.status(err.status);
                res.json({
                    message: err.message,
                    error: err
                });
            }
            else {
                res.status(200);
                res.json(user);
            }
        });
    }
    else {
        const err = new Error("No user logged in");
        err.status = 404;
        res.status(err.status);
        res.json({
            message: err.message,
            error: err
        });
    }
});

module.exports = router;
