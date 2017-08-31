/**
 * Created by zhanghongdou on 2017/8/22.
 */
function quickSort(arr) {
    const flag = arr[0];
    let arrLeft = [], arrRight = [];
    if(arr.length <= 1) {
        return arr;
    }

    for(let i = 1,len = arr.length; i < len; i ++) {
        if(arr[i] < flag) {
            arrLeft.push(arr[i]);
        } else {
            arrRight.push(arr[i]);
        }
    }
    return [].concat(quickSort(arrLeft),[flag],quickSort(arrRight));
}

console.log(quickSort([3,1,5,22,13,25]));
module.exports = quickSort;