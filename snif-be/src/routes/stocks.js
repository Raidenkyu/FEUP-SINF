const express = require('express');
const router = express.Router();
const { requestPrimavera } = require("../utils/api/jasmin");
const { getStockQuantity, getUnitPrice, getStockValue, getItemSales, getItemPurchases } = require("../utils/stock");
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
                        resourceKey: materialItem.itemKey,
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
                        productKey: materialItem.itemKey,
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
        (e) => {
            var err = new Error("Failed to fetch stocks");
            err.status = 500;
            res.status(500).json({
                message: err.message,
                error: err
            });
            throw e;
        }
    );
});

router.get("/financial", async (_req, res) => {
    await FinancialStockObject.getFinancialStockDocument((error, finObj) => {
        if (error || !finObj) {
            return res.status(400).json({
                message: error.message,
                error: error
            });
        } else {
            return res.status(200).json(finObj);
        }
    }).catch(
        () => {
            var err = new Error("Failed to fetch financials");
            err.status = 401;
            res.json({
                message: err.message,
                error: err
            });
        }
    );
});


router.get("/resources", (req, res) => {

    requestPrimavera("/materialsCore/materialsItems/").then(
        (stockData) => {

            const page = req.query.page || 1;
            const pageSize = req.query.pageSize || 5;

            const response = {
                resources: []
            };

            const resourcesList = [];

            stockData.forEach((materialItem) => {
                if (materialItem.itemSubtype == "4" || materialItem.itemSubtype == "3") {
                    const quantity = getStockQuantity(materialItem);
                    const value = getUnitPrice(materialItem);
                    resourcesList.push({
                        resourceKey: materialItem.itemKey,
                        name: materialItem.description,
                        quantity: quantity,
                        value: value,
                        error: quantity < 0,
                    });
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

            res.json(response);
        }
    ).catch(
        () => {
            var err = new Error("Failed to fetch resources");
            err.status = 401;
            res.json({
                message: err.message,
                error: err
            });
        }
    );

});

router.get("/products", (req, res) => {

    requestPrimavera("/materialsCore/materialsItems/").then(
        (stockData) => {

            const page = req.query.page || 1;
            const pageSize = req.query.pageSize || 5;

            const response = {
                products: []
            };

            const productsList = [];

            stockData.forEach((materialItem) => {
                if (materialItem.itemSubtype == "1") {
                    const quantity = getStockQuantity(materialItem);
                    const value = getStockValue(materialItem);
                    productsList.push({
                        productKey: materialItem.itemKey,
                        name: materialItem.description,
                        quantity: quantity,
                        value: value,
                        error: quantity < 0,
                    });
                }
            });

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
            var err = new Error("Failed to fetch products");
            err.status = 401;
            res.json({
                message: err.message,
                error: err
            });
        }
    );

});

router.get("/transactions/:itemKey", (req, res) => {


    const key = req.params.itemKey;

    Promise.all([
        requestPrimavera(`/materialsCore/materialsItems/${key}`),
        requestPrimavera("/purchases/orders"),
        requestPrimavera("/sales/orders")
    ]).then(
        (transactionsData) => {

            const [item, purchases, sales] = transactionsData;

            const response = {};

            if (item.itemSubtype == "4" || item.itemSubtype == "3") {
                //Resources
                response.transactions = getItemPurchases(item.itemKey, purchases);
            }
            else if (item.itemSubtype == "1") {
                //Products
                response.transactions = getItemSales(item.itemKey, sales);
            }

            res.json(response);
        }
    ).catch(
        (e) => {
            var err = new Error("Failed to fetch transactions");
            err.status = 500;
            res.status(err.status).json({
                message: err.message,
                error: err
            });

            throw e;
        }
    );

});


router.get("/:itemKey", (req, res) => {


    const key = req.params.itemKey;

    requestPrimavera(`/materialsCore/materialsItems/${key}`).then(
        (materialItem) => {

            if (materialItem.itemSubtype == "4" || materialItem.itemSubtype == "3") {
                const quantity = getStockQuantity(materialItem);
                const value = getUnitPrice(materialItem);

                res.json({
                    name: materialItem.description,
                    quantity: quantity,
                    value: value,
                    error: quantity < 0,
                });
            }
            else if (materialItem.itemSubtype == "1") {
                const quantity = getStockQuantity(materialItem);
                const value = getStockValue(materialItem);

                res.json(materialItem);
            }
        }
    ).catch(
        (e) => {
            var err = new Error("Failed to fetch stock items");
            err.status = 401;
            res.json({
                message: err.message,
                error: err
            });

            throw e;
        }
    );

});

module.exports = router;