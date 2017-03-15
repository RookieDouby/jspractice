/**
 * Created by sam on 17-2-23.
 */
//time complexity O(n^2) average O(nlog_2n)
function quickSort(array) {
    var len = array.length;

    if(len < 1) {
        return array;
    }

    var flag = Math.floor(len/2);
    var centerElement = array.splice(flag, 1)[0]; //splice method return the deleted array, so [0] must be added
    var left = [];
    var right = [];

    for(var i = 0; i < len - 1; i++) {
        if(array[i] < centerElement) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat([centerElement],quickSort(right))
}

var arr1 = [32,21,53,1,5,2,18,62,23,6];
console.log(quickSort(arr1));
