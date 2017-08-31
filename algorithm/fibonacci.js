/**
 * Created by zhanghongdou on 2017/8/23.
 */
function getFibonacci(n) {
    var fiboArr = [];
    var i = 0;
    while (i < n) {
        if(i <= 1) {
            fiboArr.push(i);
        } else {
            fiboArr.push(fiboArr[i - 2] + fiboArr[i - 1]);
        }
        i ++;
    }

    return fiboArr;
}

console.log(getFibonacci(5));