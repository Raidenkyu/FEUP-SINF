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
        accumulator+= currValue.inventoryBalance.amount;
        return accumulator;
    }, 0);
}

module.exports = {
    getStockQuantity,
    getUnitPrice,
    getStockValue
};