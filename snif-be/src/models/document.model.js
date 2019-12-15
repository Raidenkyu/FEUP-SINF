const mongoose = require('mongoose');

const FinancialObjectSchema = new mongoose.Schema({
    document: {
        type: Object,
        required: true,
    }
});

FinancialObjectSchema.statics.getFinancialDocument = (callback) => {
    // FinancialObjectSchema.findOne({}) TODO
}

const FinancialObject = mongoose.model('FinancialObject', FinancialObjectSchema);
module.exports = {
    FinancialObject
}
