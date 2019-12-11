const express = require('express');
const router = express.Router();
const { requestInvoice } = require("../utils/api/jasmin");


router.get("/invoice", (_req, res) => {
    requestInvoice().then(
        (invoiceData) => res.json(invoiceData)
    ).catch(
        () => {
            var err = new Error("Failed to fetch invoice");
            err.status = 401;
            res.json({
                message: err.message,
                error: err
            });
        }
    );
});

module.exports = router;