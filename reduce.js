var arr = ["This","is","new","world"];
var str;
str = arr.reduce(function(pre, cur, index, arr) {
    return pre + " " + cur;
},"");
console.log(str);
