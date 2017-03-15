/**
 * Created by sam on 17-3-15.
 */
// function spacify(str) {
//     return str.split('').join(' ');
// }

String.prototype.spacify = function() {
    return this.split('').join(' ');
};

console.log("HelloWorld".spacify());