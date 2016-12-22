/**
 * async function with generator
 * Created by sam on 16-12-19.
 */
function getData() {
    var data = 0;
    setTimeout(() => {
        data = 2;
        it.next(data);
    }, 10);
}

function *compute() {
    var x = yield getData();
    console.log(x*2);
}

var it = compute();
it.next();
