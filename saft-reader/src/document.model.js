const mongoose = require('mongoose');

const FinancialObjectSchema = new mongoose.Schema({
    document: {
        type: Object,
        required: true,
    }
})

const FinancialStockObjectSchema = new mongoose.Schema({
    document: {
        type: Object,
        required: true,
    }
})

const FinancialObject = mongoose.model('FinancialObject', FinancialObjectSchema);
const FinancialStockObject = mongoose.model('FinancialStockObject', FinancialStockObjectSchema);
module.exports = {
    FinancialObject: FinancialObject,
    FinancialStockObject: FinancialStockObject 
}
