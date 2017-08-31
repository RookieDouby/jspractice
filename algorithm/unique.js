/**
 * Created by zhanghongdou on 2017/8/17.
 */
let unique = function(arr) {
    let hashTable = {};
    let data = [];
    for(let i = 0, len =  arr.length; i < len; i ++ ) {
        if(!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data;
};

module.exports = unique;