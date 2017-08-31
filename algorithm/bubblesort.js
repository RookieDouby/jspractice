/**
 * Created by zhanghongdou on 2017/8/22.
 */
function bubbleSort(arr) {
    const len = arr.length;
    let temp;
    if(len == 1) {
        return arr;
    }
    for(let i = 0; i < len - 1; i ++) {
        for(let j = i + 1; j < len; j ++) {
            if(arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([2,1,3,22,11,13,6]));
module.exports = bubbleSort;
