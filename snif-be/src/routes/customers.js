const express = require('express');
const router = express.Router();
const { requestPrimavera, requestOrders, requestInvoice } = require("../utils/api/jasmin");
const { getCustomerOrdersInfo, getCustomerOrders, getCustomerInvoice } = require("../utils/customers");

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
                        value: new Intl.NumberFormat('en-UK').format(info.value)
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
        ).catch(() => {
            const err = new Error("Failed to fetch Sale");
            err.status = 400;
            res.status(400).json({
                message: err.message,
                error: err
            });
        });
});

router.get("/info/:customerKey", (req, res) => {
    const key = req.params.customerKey;

    requestPrimavera(`/salesCore/customerParties/${key}`).then(async (customer) => {

        res.json({
            customerKey: customer.partyKey,
            name: customer.name,
            taxId: customer.companyTaxID,
            email: customer.electronicMail,
            telefone: customer.telephone,
            country: customer.countryDescription
        });
    }).catch(() => {
        const err = new Error("Failed to customer information");
        err.status = 400;
        res.status(400).json({
            message: err.message,
            error: err
        });
    });
});

router.get("/orders/:customerKey", (req, res) => {
    const key = req.params.customerKey;

    requestPrimavera(`/salesCore/customerParties/${key}`).then(async (customer) => {

        const page = req.query.page || 1;
        const pageSize = req.query.pageSize || 15;

        const orders = await requestOrders();

        const filteredOrders = getCustomerOrders(customer.companyTaxID, orders).sort((a, b) => {
            if (a.value > b.value) {
                return 1;
            }

            if (a.value < b.value) {
                return -1;
            }

            return 0;
        }).slice((page - 1) * pageSize, page * pageSize);

        res.json({
            orders: filteredOrders
        });
    }).catch(() => {
        const err = new Error("Failed to fetch customer orders");
        err.status = 400;
        res.status(400).json({
            message: err.message,
            error: err
        });
    });
});

router.get("/sales/:customerKey", (req, res) => {
    const key = req.params.customerKey;

    requestPrimavera(`/salesCore/customerParties/${key}`).then(async (customer) => {

        const page = req.query.page || 1;
        const pageSize = req.query.pageSize || 15;

        const invoice = await requestInvoice();

        const filteredSales = getCustomerInvoice(customer.companyTaxID, invoice).sort((a, b) => {
            if (a.value > b.value) {
                return 1;
            }

            if (a.value < b.value) {
                return -1;
            }

            return 0;
        }).slice((page - 1) * pageSize, page * pageSize);

        res.json({ sales: filteredSales });
    }).catch(() => {
        const err = new Error("Failed to fetch customer sales");
        err.status = 400;
        res.status(400).json({
            message: err.message,
            error: err
        });
    });
});

module.exports = router;