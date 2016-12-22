/**
 * callback function demo02
 * Created by sam on 16-12-19.
 */
function getData(cb) {
    let data = 0;
    setTimeout(() => {
        data = 2;
        cb(data);
    },10);
}

function compute(x) {
    console.log(x*2);
}

getData(compute);
//output: 4