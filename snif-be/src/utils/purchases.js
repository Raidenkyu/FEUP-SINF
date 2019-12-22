const getSupplierOrders = (supplierTaxId, orders) => {

    const filteredOrders = [];

    orders.forEach((document) => {

        if (supplierTaxId == document.sellerSupplierPartyTaxId) {

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

module.exports = {
    getSupplierOrders
};