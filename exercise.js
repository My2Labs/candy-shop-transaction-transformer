function candySalesToObject() {
    return candySales.sales.map(sale => sale.item)
}
console.log(candySalesToObject());

function salesDayToObject() {
    return candySales.date.find(candySales.date === "2015-01-07");
}
console.log(salesDayToObject());

function allSalesToArray() {
    return candySales.date.filter(sale => sale.date);
}
console.log(allSalesToArray());

module.exports = {
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};