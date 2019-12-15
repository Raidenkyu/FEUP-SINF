const getCustomerOrdersInfo = (customerTaxId, orders) => {
    const info = {
        lastDate: "1111-11-11",
        totalOrders: 0,
        value: 0,
    }
    orders.forEach((order) => {
        if (customerTaxId == order.buyerCustomerPartyTaxId) {
            const orderDate = order.documentDate.split("T")[0];
            if (orderDate > info.lastDate) {
                info.lastDate = orderDate;
            }

            info.totalOrders++;

            info.value += order.payableAmount.amount;
        }
    });

    return info;
}

module.exports = {
    getCustomerOrdersInfo
};