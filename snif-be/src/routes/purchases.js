const express = require('express');
const router = express.Router();
const { requestPrimavera } = require("../utils/api/jasmin");


router.get("/", (_req, res) => {
    requestPrimavera("/invoiceReceipt/expenses").then(
        (purchasesData) => {
            
            res.json(purchasesData);
        }
    ).catch(
        () => {
            var err = new Error("Failed to fetch purchases");
            err.status = 401;
            res.json({
                message: err.message,
                error: err
            });
        }
    );
});

module.exports = router;