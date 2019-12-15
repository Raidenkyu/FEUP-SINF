const express = require('express');
const router = express.Router();
const { requestPrimavera, requestOrders } = require("../utils/api/jasmin");
const { getCustomerOrdersInfo } = require("../utils/customers");

router.get("/", (_req, res) => {
    requestPrimavera("/salesCore/customerParties/")
        .then(
            async (customersData) => {

                const orders = await requestOrders();

                const response = {
                    customers: []
                };

                const customers = [];

                customersData.forEach((customer) => {

                    const info = getCustomerOrdersInfo(customer.companyTaxID, orders);

                    customers.push({
                        name: customer.name,
                        lastDate: info.lastDate,
                        totalOrders: info.totalOrders,
                        value: info.value
                    });
                });

                response.customers = customers.sort((a, b) => {
                    if (a.value > b.value) {
                        return 1;
                    }
                    if (a.value < b.value) {
                        return -1;
                    }

                    return 0;
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