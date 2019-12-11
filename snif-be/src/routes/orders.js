const express = require('express');
const router = express.Router();
const { requestOrders } = require("../utils/api/jasmin");

router.get("/", (_req, res) => {
    requestOrders().then(
        (ordersData) => res.json(ordersData)
    ).catch(
        () => {
            var err = new Error("Failed to fetch orders");
            err.status = 401;
            res.json({
                message: err.message,
                error: err
            });
        }
    );
});

module.exports = router;