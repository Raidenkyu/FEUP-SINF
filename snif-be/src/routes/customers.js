const express = require('express');
const router = express.Router();
const { requestPrimavera, requestOrders } = require("../utils/api/jasmin");
const { getCustomerOrdersInfo, getCustomerOrders } = require("../utils/customers");

router.get("/", (req, res) => {
    requestPrimavera("/salesCore/customerParties/")
        .then(
            async (customersData) => {

                const page = req.query.page || 1;
                const pageSize = req.query.pageSize || 15;

                const orders = await requestOrders();

                const response = {
                    customers: []
                };

                const customers = [];

                customersData.forEach((customer) => {

                    const info = getCustomerOrdersInfo(customer.companyTaxID, orders);

                    customers.push({
                        customerKey: customer.partyKey,
                        name: customer.name,
                        lastDate: info.lastDate,
                        totalOrders: info.totalOrders,
                        value: info.value.toFixed(2)
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

router.get("/:customerKey", (req, res) => {
    const key = req.params.customerKey;

    requestPrimavera(`/salesCore/customerParties/${key}`).then(async (customer) => {

        const orders = await requestOrders();

        const filteredOrders = getCustomerOrders(customer.companyTaxID, orders);

        res.json({
            customerKey: customer.partyKey,
            name: customer.name,
            taxId: customer.companyTaxID,
            email: customer.electronicMail,
            telefone: customer.telephone,
            country: customer.countryDescription,
            orders: filteredOrders
        });
    });
});

module.exports = router;