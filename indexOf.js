var arr = [1,2,3,4,5];
var sum = 0;
// 1. forEach
// arr.forEach(function(item) {
//     sum += item;
// });

// 2. reduce
sum = arr.reduce(function(pre, cur) {
    return pre + cur;
});
//传入intialValue
var sum1 = arr.reduce(function(pre, cur, index, arr){
    return pre + cur;
},10);
console.log(sum1);
