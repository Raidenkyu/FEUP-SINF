const express = require('express');
const router = express.Router();
const { requestInvoice } = require("../utils/api/jasmin");
const { extractTimestamp } = require("../utils/regex");
const { getYearProfit } = require("../utils/sales");

router.get("/", (_req, res) => {
    requestInvoice().then(
        (invoiceData) => {
            const response = {
                growth: 0,
                margin: 0,
                salesByTimestamp: {},
                products: {},
                salesList: [],
            };

            salesList = [];

            invoiceData.map((bill) => {
                bill.documentLines.map((sale) => {
                    salesList.push({
                        id: sale.invoiceId,
                        product: sale.description,
                        quantity: sale.quantity,
                        value: sale.grossValue.amount,
                        date: sale.deliveryDate.split("T")[0],
                        revenue: sale.lineExtensionAmount.amount
                    });

                    if (response.products[sale.description] == undefined) {
                        response.products[sale.description] = {
                            productKey: sale.salesItem,
                            units: 0,
                            revenue: 0
                        };
                    }

                    response.products[sale.description] = {
                        productKey: sale.salesItem,
                        units: sale.quantity + response.products[sale.description].units,
                        revenue: sale.lineExtensionAmount.amount + response.products[sale.description].revenue
                    };
                });

            });

            const accumulatedValue = salesList.reduce((accumulator, currentValue) => {

                const timestamp = extractTimestamp(currentValue.date);

                if (accumulator[timestamp] == undefined) {
                    accumulator[timestamp] = {
                        revenue: 0,
                        income: 0
                    };
                }

                accumulator[timestamp].revenue = accumulator[timestamp].revenue + currentValue.revenue;
                accumulator[timestamp].income = accumulator[timestamp].income + currentValue.value;

                return accumulator;
            }, {});

            Object.keys(accumulatedValue).sort().forEach((key) => {
                response.salesByTimestamp[key] = accumulatedValue[key];
            }, {});

            const currYear = new Date().getFullYear();
            const prevYear = currYear - 1;
            const profit = getYearProfit(currYear, response.salesByTimestamp);
            const prevProfit = getYearProfit(prevYear, response.salesByTimestamp);

            response.growth = (prevProfit.revenue == 0 ? 0 : (profit.revenue - prevProfit.revenue) / prevProfit.revenue);
            response.margin = (profit.income / profit.revenue) * 100;

            response.salesList = salesList.sort((a, b) => {
                if (a.date < b.date) {
                    return 1;
                }

                else if (a.date > b.date) {
                    return -1;
                }

                return 0;
            });

            res.json(response);
        }
    ).catch(() => {
        const err = new Error("Failed to fetch Sales");
        err.status = 400;
        res.status(400).json({
            message: err.message,
            error: err
        });
    });
});

router.get("/list", (req, res) => {
    requestInvoice().then(
        (invoiceData) => {
            const page = req.query.page || 1;
            const pageSize = req.query.pageSize || 15;

            const response = {
                salesList: [],
            };

            const salesList = [];

            invoiceData.forEach((bill) => {
                salesList.push({
                    clientName: bill.buyerCustomerPartyName,
                    clientTaxID: bill.buyerCustomerPartyTaxId,
                    totalValue: bill.payableAmount.amount,
                    date: bill.exchangeRateDate.split("T")[0],
                    invoiceId: bill.documentLines[0].invoiceId,
                });
            });

            response.salesList = salesList.sort((a, b) => {
                if (a.date < b.date) {
                    return 1;
                }

                else if (a.date > b.date) {
                    return -1;
                }

                return 0;
            }).slice((page - 1) * pageSize, page * pageSize);

            res.json(response);
        }
    ).catch(() => {
        const err = new Error("Failed to fetch Sales list");
        err.status = 400;
        res.status(400).json({
            message: err.message,
            error: err
        });
    });
});

router.get("/:saleKey", (req, res) => {
    const key = req.params.saleKey;

    requestInvoice().then((sales) => {

        const salesList = [];

        sales.forEach((sale) => {

            if (sale.documentLines[0].invoiceId != key) {
                return;
            }

            sale.documentLines.forEach((product) => {
                salesList.push({
                    product: product.description,
                    quantity: product.quantity,
                    value: product.grossValue.amount,
                    revenue: product.lineExtensionAmount.amount
                });
            });

            res.json({
                clientName: sale.buyerCustomerPartyName,
                clientTaxID: sale.buyerCustomerPartyTaxId,
                totalValue: sale.payableAmount.amount,
                date: sale.documentDate.split("T")[0],
                invoiceId: sale.documentLines[0].invoiceId,
                salesList: salesList
            });

        });

    }).catch(() => {
        const err = new Error("Failed to fetch Sale");
        err.status = 400;
        res.status(400).json({
            message: err.message,
            error: err
        });
    });
});

module.exports = router;