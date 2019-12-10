const express = require('express');
const router = express.Router();
const { requestOrders, requestInvoice } = require("../utils/api/jasmin");

router.get("/orders", (_req, res) => {
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
})

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
  })

module.exports = router;