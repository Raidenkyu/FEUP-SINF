const getYearProfit = (year, salesByTimestamp) => {

    let profit = {
        revenue: 0,
        income: 0
    };

    for (let i = 1; i <= 12; i++) {
        
        const formattedNumber = ("0" + i).slice(-2);
        const key = `${year}-${formattedNumber}`;

        console.log(key);

        if (!salesByTimestamp.hasOwnProperty(key)) continue;

        profit.revenue = salesByTimestamp[key].revenue;
        profit.income = salesByTimestamp[key].income;
    }

    return profit;
}

module.exports = {
    getYearProfit
};