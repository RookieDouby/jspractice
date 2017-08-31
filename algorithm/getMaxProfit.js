/**
 * Created by zhanghongdou on 2017/8/23.
 */
function getMaxProfit(arr) {
    var minPrice = arr[0];
    var maxProfit = 0;

    for(var i = 0, len = arr.length; i < len; i++) {
        var currentValue = arr[i];
        minPrice = Math.min(minPrice, currentValue);
        var potentialProfit = currentValue - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
    }

    return maxProfit;
}
console.log(getMaxProfit([1, 11,4,22,51,23,13]));