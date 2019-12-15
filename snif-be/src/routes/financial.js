const express = require('express');
const router = express.Router();
var FinancialObject = require('../models/document.model.js');

router.get("/", (req, res) => {
    console.log("GET IN FINANCIAL");
});

module.exports = router;