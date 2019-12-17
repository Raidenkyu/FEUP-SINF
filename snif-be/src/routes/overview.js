const express = require('express');
const router = express.Router();
const { extractTimestamp, extractMonth } = require("../utils/regex");
const { requestPrimavera, requestInvoice } = require("../utils/api/jasmin");
const { getStockQuantity, getUnitPrice, getStockValue } = require("../utils/stock");

router.get("/stock", (_req, res) => {
    requestPrimavera("/materialsCore/materialsItems/").then(
        (stockData) => {

            const response = {
                assetsInStock: { products: 0, resources: 0 },
            };

            stockData.forEach((materialItem) => {
                if (materialItem.itemSubtype == "4" || materialItem.itemSubtype == "3") {
                    const quantity = getStockQuantity(materialItem);
                    const value = getUnitPrice(materialItem);
                    response.assetsInStock.resources += quantity * value;
                }
                else if (materialItem.itemSubtype == "1") {
                    const quantity = getStockQuantity(materialItem);
                    const value = getStockValue(materialItem);
                    response.assetsInStock.products += value;
                }
            });

            res.json(response);

        }
    ).catch(
        () => {
            var err = new Error("Failed to fetch stock value");
            err.status = 401;
            res.json({
                message: err.message,
                error: err
            });
        }
    );
});

router.get("/sales", (_req, res) => {
    requestInvoice().then(
        (invoiceData) => {

            const response = {
                salesByTimestamp: {},
            };

            const salesList = [];

            invoiceData.map((bill) => {
                bill.documentLines.map((sale) => {
                    salesList.push({
                        value: sale.grossValue.amount,
                        date: sale.deliveryDate.split("T")[0],
                        revenue: sale.lineExtensionAmount.amount
                    });
                });

            });

            const accumulatedValue = salesList.reduce((accumulator, currentValue) => {

                const timestamp = extractTimestamp(currentValue.date);
                const month = extractMonth(currentValue.date);
                const date = new Date();

                if (month == date.getMonth() || month == date.getMonth() + 1) {

                    if (accumulator[timestamp] == undefined) {
                        accumulator[timestamp] = {
                            revenue: 0,
                            income: 0
                        };
                    }

                    accumulator[timestamp].revenue = accumulator[timestamp].revenue + currentValue.revenue;
                    accumulator[timestamp].income = accumulator[timestamp].income + currentValue.value;
                }

                return accumulator;
            }, {});

            Object.keys(accumulatedValue).sort().forEach((key) => {
                response.salesByTimestamp[key] = accumulatedValue[key];
            }, {});

            res.json(response);

        }
    ).catch(
        () => {
            var err = new Error("Failed to fetch stock value");
            err.status = 401;
            res.json({
                message: err.message,
                error: err
            });
        }
    );
});

router.get("/purchases", (_req, res) => {
    requestPrimavera("/invoiceReceipt/invoices").then(
        (purchasesData) => {
            const purchasesByTimestamp = {};

            purchasesData.forEach((purchase) => {
                const timestamp = extractTimestamp(purchase.documentDate.split("T")[0]);
                const month = extractMonth(purchase.documentDate.split("T")[0]);
                const date = new Date();

                if (month == date.getMonth() || month == date.getMonth() + 1) {


                    if (purchasesByTimestamp[timestamp] == undefined) {
                        purchasesByTimestamp[timestamp] = 0;
                    }

                    purchasesByTimestamp[timestamp] += purchase.payableAmount.amount;
                }
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

module.exports = router;