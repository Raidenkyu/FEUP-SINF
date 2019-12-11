const express = require('express');
const router = express.Router();
const { requestPrimavera } = require("../utils/api/jasmin");


router.get("/", (_req, res) => {
    requestPrimavera("/salesCore/customerParties/extension").then(
        (customersData) => res.json(customersData)
    ).catch(
        () => {
            var err = new Error("Failed to fetch customers");
            err.status = 401;
            res.json({
                message: err.message,
                error: err
            });
        }
    );
});

module.exports = router;