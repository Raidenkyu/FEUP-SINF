const express = require('express');
const router = express.Router();
const { requestOrders } = require("../utils/api/jasmin");
const { extractTimestamp } = require("../utils/regex");

const PERMISSIONS = ["admin"];

router.get("/", (req, res) => {
    if (!PERMISSIONS.includes(req.role)) {
        return res.status(401).json({
            message: 'Unauthorized: Role not valid',
        });
    }

    requestOrders().then(
        (ordersData) => {

            const response = {
                pendingValue: 0,
                pendingNum: 0,
                ordersByTimestamp: {},
                ordersProducts: []
            };

            const ordersProducts = []

            ordersData.map((order) => {
                order.documentLines.map((product) => {
                    ordersProducts.push({
                        id: product.orderId,
                        product: product.description,
                        state: (product.isDeleted ? "Cancelled" : (product.documentLineStatus == 1 ? "Pending" : "Processed")),
                        quantity: product.quantity,
                        value: product.lineExtensionAmount.amount,
                        date: product.deliveryDate.split("T")[0]
                    });
                });
            });

            const accumulatedValue = ordersProducts.reduce((accumulator, currentValue) => {
                if (currentValue.state == "Pending") {
                    accumulator.pendingValue += currentValue.value;
                    accumulator.pendingNum++;
                }

                const timestamp = extractTimestamp(currentValue.date);

                if (accumulator.ordersByTimestamp[timestamp] == undefined) {
                    accumulator.ordersByTimestamp[timestamp] = {
                        fulfilled: 0,
                        canceled: 0
                    }
                }

                accumulator.ordersByTimestamp[timestamp] = {
                    fulfilled: accumulator.ordersByTimestamp[timestamp].fulfilled + (currentValue.state == "Processed" ? 1 : 0),
                    canceled: accumulator.ordersByTimestamp[timestamp].canceled + (currentValue.state == "Cancelled" ? 1 : 0)
                };

                return accumulator;
            }, { pendingValue: 0, pendingNum: 0, ordersByTimestamp: {} });

            response.pendingValue = accumulatedValue.pendingValue;
            response.pendingNum = accumulatedValue.pendingNum;

            Object.keys(accumulatedValue.ordersByTimestamp).sort().forEach((key) => {
                response.ordersByTimestamp[key] = accumulatedValue.ordersByTimestamp[key];
            });

            res.json(response);
        }
    ).catch(() => {
        const err = new Error("Failed to fetch Sale");
        err.status = 400;
        res.status(400).json({
            message: err.message,
            error: err
        });
    });
});

router.get("/list", (req, res) => {

    if (!PERMISSIONS.includes(req.role)) {
        return res.status(401).json({
            message: 'Unauthorized: Role not valid',
        });
    }

    requestOrders().then(
        (ordersData) => {

            const page = req.query.page || 1;
            const pageSize = req.query.pageSize || 15;

            const response = {
                ordersProducts: []
            }

            const ordersProducts = [];

            ordersData.forEach((order) => {
                ordersProducts.push({
                    clientName: order.buyerCustomerPartyName,
                    clientTaxID: order.buyerCustomerPartyTaxId,
                    totalValue: order.payableAmount.amount,
                    date: order.exchangeRateDate.split("T")[0],
                    orderId: order.documentLines[0].orderId,
                    state: (order.documentLines[0].isDeleted ? "Cancelled" : (order.documentLines[0].documentLineStatus == 1 ? "Pending" : "Processed")),
                });
            });

            response.ordersProducts = ordersProducts.sort((a, b) => {
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
        const err = new Error("Failed to fetch Sale");
        err.status = 400;
        res.status(400).json({
            message: err.message,
            error: err
        });
    });
});

router.get("/order/:orderKey", (req, res) => {
    const key = req.params.orderKey;

    if (!PERMISSIONS.includes(req.role)) {
        return res.status(401).json({
            message: 'Unauthorized: Role not valid',
        });
    }

    requestOrders().then(async (orders) => {

        const orderList = [];

        orders.forEach((order) => {

            if (order.documentLines[0].orderId != key) {
                return;
            }

            order.documentLines.forEach((product) => {
                orderList.push({
                    productName: product.description,
                    productQuantity: product.quantity,
                    productValue: product.lineExtensionAmount.amount,
                });
            });

            res.json({
                clientName: order.buyerCustomerPartyName,
                clientTaxID: order.buyerCustomerPartyTaxId,
                totalValue: order.payableAmount.amount,
                date: order.documentDate.split("T")[0],
                orderId: order.documentLines.orderId,
                state: (order.documentLines[0].isDeleted ? "Cancelled" : (order.documentLines[0].documentLineStatus == 1 ? "Pending" : "Processed")),
                orderList: orderList
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