/**
 * async with es7
 * Created by sam on 16-12-19.
 */
function getData() {
    var data = 0;
    return new Promise((resolve) => {
        setTimeout(() => {
            data = 2;
            resolve(data);
        }, 10);
    });
}

async function compute() {
    var x = await getData();
    console.log(x * 2);
}

compute();


