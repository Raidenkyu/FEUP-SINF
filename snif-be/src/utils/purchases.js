const getSupplierOrders = (supplierTaxId, orders) => {

    const info = {
        orders: [],
        quantity: 0,
        totalPrice: 0,
        num: 0
    };

    orders.forEach((document) => {

        if (supplierTaxId == document.sellerSupplierPartyTaxId) {
            document.documentLines.forEach((purchase) => {
                info.orders.push({
                    purchaseId: purchase.orderId,
                    name: purchase.description,
                    quantity: purchase.quantity,
                    value: purchase.lineExtensionAmount.amount,
                    date: purchase.deliveryDate.split("T")[0]
                });

                info.quantity += purchase.quantity;
                info.totalPrice += purchase.unitPrice.amount;
                info.num++;
            });
        }
    });

    return info;
}

module.exports = {
    getSupplierOrders
};