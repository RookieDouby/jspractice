/**
 * find max duplicate char of a string
 * Created by zhanghongdou on 2017/8/17.
 */

function findMaxDuplicateChar(str) {
    if(str.length === 1) {
        return str;
    }

    let charObj = {};
    for(let i = 0, len = str.length; i < len; i ++) {
        if(!charObj[str.charAt(i)]) {
            charObj[str.charAt(i)] = 1;
        } else {
            charObj[str.charAt(i)] += 1;
        }
    }

    let maxChar = "";
    let maxCount = 1;
    for(var k in charObj) {
        if(charObj[k] > maxCount) {
            maxCount =  charObj[k];
            maxChar = k;
        }
    }
    return {
        maxChar: maxChar,
        maxCount: maxCount
    };
}

module.exports = findMaxDuplicateChar;

console.log(findMaxDuplicateChar("abcbadsaad"));
