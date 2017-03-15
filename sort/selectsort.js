/**
 * Created by sam on 17-2-23.
 */
//time complexity O(n^2) ----steady
function selectSort(array) {
    var len = array.length;
    var min, tmp;

    for(var i = 0; i < len; i++) {
        min = i;
        for(var j = i +1; j < len; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
            if(min != i) {
                tmp = array[min];
                array[min] = array[i];
                array[i] = tmp;
            }
        }

    return array;
}

var arr1 = [31,1,23,4,2,3,14,25,17];
console.log(selectSort(arr1));