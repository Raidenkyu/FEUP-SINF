const mongoose = require('mongoose');

const BalanceSheetSchema = new mongoose.Schema({
    document: {
        type: Object,
        required: true,
    }
})

const BalanceSheet = mongoose.model('BalanceSheet', BalanceSheetSchema);
module.exports = {
    BalanceSheet
}
