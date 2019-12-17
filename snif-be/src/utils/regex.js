const extractTimestamp = (date) => {
    const match = date.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
    return `${match[1]}-${match[2]}`;
}

const extractMonth = (date) => {
    const match = date.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
    return `${match[2]}`;
}

module.exports = {
    extractTimestamp,
    extractMonth
};