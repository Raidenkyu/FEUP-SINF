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

            filteredOrders.push({
                orderId: document.documentLines[0].orderId,
                totalValue: document.payableAmount.amount,
                date: document.exchangeRateDate.split("T")[0],
                state: (document.documentLines[0].isDeleted ? "Cancelled" : (document.documentLines[0].documentLineStatus == 1 ? "Pending" : "Processed"))
            });
        }
    });

    return filteredOrders;
}

const getCustomerInvoice = (customerTaxId, invoice) => {

    const filteredInvoice = [];

    invoice.forEach((document) => {

        if (customerTaxId == document.buyerCustomerPartyTaxId) {

            filteredInvoice.push({
                invoiceId: document.documentLines[0].invoiceId,
                totalValue: document.payableAmount.amount,
                date: document.exchangeRateDate.split("T")[0],
            });
        }
    });

    return filteredInvoice;
}

module.exports = {
    getCustomerOrdersInfo,
    getCustomerOrders,
    getCustomerInvoice
};