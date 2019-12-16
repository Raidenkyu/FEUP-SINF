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

            const page = req.query.page || 1;
            const pageSize = req.query.pageSize || 15;

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