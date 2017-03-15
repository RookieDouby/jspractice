//steady
function bubbleSort(arr) {
    var len = arr.length;
    var temp;
    for(var i = len - 1; i > 0; i--) {
        for(var j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log(arr);
        console.log("------------------------");
    }
    return arr;
}

var array = [10,31,1,4,2,3,27,29,21,34];
bubbleSort(array);
