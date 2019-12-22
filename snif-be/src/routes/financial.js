const express = require('express');
const router = express.Router();
let { FinancialObject, FinancialOverviewObject } = require('../models/financial.model')

router.get("/", async (_req, res) => {
    await FinancialObject.getFinancialDocument((error, finObj) => {
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

router.get("/overview", async (_req, res) => {
    await FinancialOverviewObject.getFinancialOverviewDocument((error, finObj) => {
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