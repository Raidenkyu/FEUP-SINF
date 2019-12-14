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
            invoiceData.map((bill) => {
                bill.documentLines.map((sale) => {
                    response.salesList.push({
                        id: sale.invoiceId,
                        product: sale.description,
                        quantity: sale.quantity,
                        value: sale.grossValue.amount,
                        date: sale.deliveryDate.split("T")[0],
                        revenue: sale.lineExtensionAmount.amount
                    });

                    if (response.products[sale.description] == undefined) {
                        response.products[sale.description] = {
                            units: 0,
                            revenue: 0
                        };
                    }

                    response.products[sale.description] = {
                        units: sale.quantity + response.products[sale.description].units,
                        revenue: sale.lineExtensionAmount.amount  + response.products[sale.description].revenue
                    };
                });

            });

            const accumulatedValue = response.salesList.reduce((accumulator, currentValue) => {

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

            res.json(response);
        }
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