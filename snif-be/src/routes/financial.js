const express = require('express');
const router = express.Router();
var { FinancialObject } = require('../models/document.model.js');

router.get("/", (_req, res) => {
    FinancialObject.getFinancialDocument((error, finObj) => {
        if (error || !finObj) {
            return res.status(400).json({
                message: error.message,
                error: error
            });
        } else {
            return res.status(200).json({
                message: finObj,
            });
        }
    });
});

module.exports = router;