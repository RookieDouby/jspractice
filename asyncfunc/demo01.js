/**
 * Created by sam on 16-12-19.
 */
//a wrong try getting async data
function getData() {
    var data = 0;
    setTimeout(() => {
        data = 2;
    },10);
    return data;
}

function compute() {
    var x = getData();
    console.log(x*2);
}
compute();
//output: 0