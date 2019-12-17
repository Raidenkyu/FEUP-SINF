const mongoose = require('mongoose');

const FinancialObjectSchema = new mongoose.Schema({
    document: {
        type: Object,
        required: true,
    }
});

const FinancialStockObjectSchema = new mongoose.Schema({
    document: {
        type: Object,
        required: true,
    }
});

const FinancialOverviewObjectSchema = new mongoose.Schema({
    document: {
        type: Object,
        required: true,
    }
});

FinancialObjectSchema.statics.getFinancialDocument = (callback) => {
    FinancialObject.findOne({})
        .exec(function (err, finObj) {
            if (err) {
                return callback(err)
            } else if (!finObj) {
                var err = new Error('Financial Object not found.');
                err.status = 401;
                return callback(err);
            }
            return callback(null, finObj);
        });
}

FinancialStockObjectSchema.statics.getFinancialStockDocument = (callback) => {
    FinancialStockObject.findOne({})
        .exec(function (err, finObj) {
            if (err) {
                return callback(err)
            } else if (!finObj) {
                var err = new Error('Financial Object not found.');
                err.status = 401;
                return callback(err);
            }
            return callback(null, finObj);
        });
}

FinancialOverviewObjectSchema.statics.getFinancialOverviewDocument = (callback) => {
    FinancialOverviewObject.findOne({})
        .exec(function (err, finObj) {
            if (err) {
                return callback(err)
            } else if (!finObj) {
                var err = new Error('Financial Object not found.');
                err.status = 401;
                return callback(err);
            }
            return callback(null, finObj);
        });
}

const FinancialObject = mongoose.model('FinancialObject', FinancialObjectSchema);
const FinancialStockObject = mongoose.model('FinancialStockObject', FinancialStockObjectSchema);
const FinancialOverviewObject = mongoose.model('FinancialOverviewObject', FinancialOverviewObjectSchema);
module.exports = {
    FinancialObject: FinancialObject,
    FinancialStockObject: FinancialStockObject,
    FinancialOverviewObject: FinancialOverviewObject,
}
