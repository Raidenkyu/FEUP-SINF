const express = require('express');
const router = express.Router();
const { requestPrimavera } = require("../utils/api/jasmin");
const { getStockQuantity, getUnitPrice, getStockValue } = require("../utils/stock");


router.get("/", (_req, res) => {
    requestPrimavera("/materialsCore/materialsItems/").then(
        (stockData) => {
            const response = {
                assetsInStock: { products: 0, resources: 0 },
                products: [],
                resources: []
            };

            stockData.forEach((materialItem) => {
                if (materialItem.itemSubtype == "4" || materialItem.itemSubtype == "3") {
                    const quantity = getStockQuantity(materialItem);
                    const value = getUnitPrice(materialItem);
                    response.resources.push({
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
                    response.products.push({
                        name: materialItem.description,
                        quantity: quantity,
                        value: value,
                        error: quantity < 0,
                    });
                    response.assetsInStock.products += value;
                }
            });

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

module.exports = router;