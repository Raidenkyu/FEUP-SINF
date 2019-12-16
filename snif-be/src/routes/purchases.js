const express = require('express');
const router = express.Router();
const { requestPrimavera } = require("../utils/api/jasmin");
const { extractTimestamp } = require("../utils/regex");

router.get("/monthly", (_req, res) => {
    requestPrimavera("/invoiceReceipt/invoices").then(
        (purchasesData) => {
            const purchasesByTimestamp = {};

            purchasesData.forEach((purchase) => {
                const timestamp = extractTimestamp(purchase.documentDate.split("T")[0]);

                if (purchasesByTimestamp[timestamp] == undefined) {
                    purchasesByTimestamp[timestamp] = 0;
                }

                purchasesByTimestamp[timestamp] += purchase.payableAmount.amount;
            });
            res.json({
                purchasesByTimestamp: purchasesByTimestamp
            });
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

router.get("/list", (req, res) => {
    requestPrimavera("/purchases/orders").then(
        (purchasesData) => {

            const page = req.query.page || 1;
            const pageSize = req.query.pageSize || 15;

            console.log(page, pageSize);

            const purchasesList = [];

            purchasesData.forEach((document) => {
                document.documentLines.forEach((purchase) => {
                    purchasesList.push({
                        purchaseId: purchase.orderId,
                        name: purchase.description,
                        quantity: purchase.quantity,
                        value: purchase.lineExtensionAmount.amount,
                        date: purchase.deliveryDate.split("T")[0]
                    });
                });
            });
            res.json({
                purchasesList: purchasesList.sort((a, b) => {
                    if (a.date < b.date) {
                        return 1;
                    }

                    else if (a.date > b.date) {
                        return -1;
                    }

                    return 0;
                }).slice((page - 1) * pageSize, page * pageSize)
            });
        }
    );
});

router.get("/suppliers", (_req, res) => {
    requestPrimavera("/purchases/orders").then(
        (suppliersData) => {
            const suppliers = [];
            suppliersData.forEach((supplier) => {
                const accumulator = supplier.documentLines.reduce((accumulator, order) => {
                    accumulator.quantity += order.quantity;
                    accumulator.totalPrice += order.unitPrice.amount;
                    accumulator.num++;
                    return accumulator;
                }, { quantity: 0, totalPrice: 0, num: 0 });
                suppliers.push({
                    supplierId: supplier.sellerSupplierPartyTaxId,
                    quantity: accumulator.quantity,
                    priceRatio: accumulator.totalPrice / accumulator.num
                });

            });
            res.json({
                suppliers: suppliers
            });
        }
    );
});
module.exports = router;