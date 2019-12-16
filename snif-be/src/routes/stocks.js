const express = require('express');
const router = express.Router();
const { requestPrimavera } = require("../utils/api/jasmin");
const { getStockQuantity, getUnitPrice, getStockValue } = require("../utils/stock");
var { FinancialStockObject } = require('../models/financial.model.js');


router.get("/", (req, res) => {
    requestPrimavera("/materialsCore/materialsItems/").then(
        (stockData) => {

            const page = req.query.page || 1;
            const pageSize = req.query.pageSize || 5;

            const response = {
                assetsInStock: { products: 0, resources: 0 },
                products: [],
                resources: []
            };

            const resourcesList = [];
            const productsList = [];

            stockData.forEach((materialItem) => {
                if (materialItem.itemSubtype == "4" || materialItem.itemSubtype == "3") {
                    const quantity = getStockQuantity(materialItem);
                    const value = getUnitPrice(materialItem);
                    resourcesList.push({
                        name: materialItem.description,
                        quantity: quantity,
                        value: value,
                        error: quantity < 0,
                    });
                    response.assetsInStock.resources += quantity * value;
                }
                else if (materialItem.itemSubtype == "1") {
                    const quantity = getStockQuantity(materialItem);
                    const value = getStockValue(materialItem);
                    productsList.push({
                        name: materialItem.description,
                        quantity: quantity,
                        value: value,
                        error: quantity < 0,
                    });
                    response.assetsInStock.products += value;
                }
            });

            response.resources = resourcesList.sort((a, b) => {
                if (a.date < b.date) {
                    return 1;
                }

                else if (a.date > b.date) {
                    return -1;
                }

                return 0;
            }).slice((page - 1) * pageSize, page * pageSize);

            response.products = productsList.sort((a, b) => {
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
            var err = new Error("Failed to fetch customers");
            err.status = 401;
            res.json({
                message: err.message,
                error: err
            });
        }
    );
});

router.get("/financial", (_req, res) => {
    FinancialStockObject.getFinancialStockDocument((error, finObj) => {
        if (error || !finObj) {
            return res.status(400).json({
                message: error.message,
                error: error
            });
        } else {
            return res.status(200).json(finObj);
        }
    });
});

module.exports = router;