/**
 * get async data with Promise.
 * Created by sam on 16-12-19.
 */
function getData() {
    let data = 0;
    return new Promise((resolve) => {
        data = 2;
        resolve(data);
    }, 10);
}

function compute(x) {
    console.log(x * 2);
}

getData().then(compute);