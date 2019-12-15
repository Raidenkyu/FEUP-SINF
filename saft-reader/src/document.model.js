const mongoose = require('mongoose');

const FinancialObjectSchema = new mongoose.Schema({
    document: {
        type: Object,
        required: true,
    }
})

const FinancialObject = mongoose.model('FinancialObject', FinancialObjectSchema);
module.exports = {
    FinancialObject
}
