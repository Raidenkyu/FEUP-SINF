const express = require('express');
const router = express.Router();
var { FinancialObject, FinancialOverviewObject } = require('../models/financial.model.js');

router.get("/", (_req, res) => {
    FinancialObject.getFinancialDocument((error, finObj) => {
        if (error || !finObj) {
            return res.status(400).json({
                message: error.message,
                error: error
            });
        } else {
            return res.status(200).json(finObj);
        }
    });
});

router.get("/overview", (_req, res) => {
    FinancialOverviewObject.getFinancialOverviewDocument((error, finObj) => {
        if (error || !finObj) {
            return res.status(400).json({
                message: error.message,
                error: error
            });
        } else {
            return res.status(200).json(finObj);
        }
    });
});

module.exports = router;