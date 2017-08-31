/**
 * check if a string is palindrom
 * Created by zhanghongdou on 2017/8/17.
 */
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}
console.log(checkPalindrom("madam"));
console.log(checkPalindrom("madsam"));