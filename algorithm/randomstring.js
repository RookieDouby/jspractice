/**
 * Created by zhanghongdou on 2017/8/23.
 */
function randomString(n) {
    let str = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let temp = '';
    for(let i = 0, len = str.length; i < n; i ++) {
        temp += str.charAt(Math.random() * len);
    }
}