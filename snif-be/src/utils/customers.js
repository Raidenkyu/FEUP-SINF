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

const getCustomerOrders = (customerTaxId, orders) => {

    const filteredOrders = [];

    orders.forEach((document) => {

        if (customerTaxId == document.buyerCustomerPartyTaxId) {

            document.documentLines.forEach((product) => {
                filteredOrders.push({
                    orderId: product.orderId,
                    product: product.description,
                    state: (product.isDeleted ? "Cancelled" : (product.documentLineStatus == 1 ? "Pending" : "Processed")),
                    quantity: product.quantity,
                    value: product.lineExtensionAmount.amount,
                    date: product.deliveryDate.split("T")[0]
                });
            });
        }
    });

    return filteredOrders;
}

module.exports = {
    getCustomerOrdersInfo,
    getCustomerOrders
};