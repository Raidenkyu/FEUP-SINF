const getStockQuantity = (item) => {


    return item.materialsItemWarehouses.reduce((accumulator, currValue) => {
        accumulator += currValue.stockBalance;
        return accumulator;
    }, 0);
}

const getUnitPrice = (item) => {

    return (item.materialsItemWarehouses.reduce((accumulator, currValue) => {
        accumulator += currValue.calculatedUnitCost.amount;
        return accumulator;
    }, 0) / item.materialsItemWarehouses.length);
}

const getStockValue = (item) => {

    return item.materialsItemWarehouses.reduce((accumulator, currValue) => {
        accumulator += currValue.inventoryBalance.amount;
        return accumulator;
    }, 0);
}

const getItemOrders = (itemKey, sales) => {

    const filteredSales = [];

    sales.forEach((sale) => {
        sale.documentLines.forEach((product) => {
            if (product.salesItem == itemKey) {
                filteredSales.push({
                    id: product.orderId,
                    product: product.description,
                    customer: sale.buyerCustomerPartyName,
                    state: (product.isDeleted ? "Cancelled" : (product.documentLineStatus == 1 ? "Pending" : "Processed")),
                    quantity: product.quantity,
                    value: product.lineExtensionAmount.amount,
                    date: product.deliveryDate.split("T")[0]
                });
            }
        });

    });

    return filteredSales;
}

const getItemSales = (itemKey, sales) => {

    const filteredSales = [];

    sales.forEach((sale) => {
        sale.documentLines.forEach((product) => {
            if (product.salesItem == itemKey) {
                filteredSales.push({
                    id: product.invoiceId,
                    product: product.description,
                    quantity: product.quantity,
                    value: product.grossValue.amount,
                    date: product.deliveryDate.split("T")[0],
                    revenue: product.lineExtensionAmount.amount
                });
            }
        });

    });

    return filteredSales;
}

const getItemPurchases = (itemKey, purchases) => {
    const filteredPurchases = [];

    purchases.forEach((purchase) => {
        purchase.documentLines.forEach((product) => {
            if (product.purchasesItem == itemKey) {
                filteredPurchases.push({
                    id: product.orderId,
                    product: product.description,
                    supplier: purchase.sellerSupplierPartyName,
                    state: (product.isDeleted ? "Cancelled" : (product.documentLineStatus == 1 ? "Pending" : "Processed")),
                    quantity: product.quantity,
                    value: product.lineExtensionAmount.amount,
                    date: product.deliveryDate.split("T")[0]
                });
            }
        });

    });

    return filteredPurchases;
}

module.exports = {
    getStockQuantity,
    getUnitPrice,
    getStockValue,
    getItemOrders,
    getItemSales,
    getItemPurchases
};