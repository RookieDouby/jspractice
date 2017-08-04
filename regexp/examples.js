//1-------匹配颜色编码
// var regExp1 = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/g;
// var string = "#FF09ad #333 #FFF #ffe";
// console.log(string.match(regExp1));

//2-------匹配时间
/* 首位2, 2位为0-4其他情况为0-9
*
* 时分 第一位为0-5
* */
// var regExp2 = /^([01][0-9]|[2][0-4]):[0-5][0-9]$/;
// console.log(regExp2.test("23:59"));
// console.log(regExp2.test("00:01"));

/*
* 3-------匹配日期 yyyy-MM-DD
* 前四位任意数字, MM 0-1  
*
*
* */
var regExp2 = /^[0-9]{4}-(0[1-9]|1[s0-2])-(0[1-9]|[12][0-9]|3[01])$/;
console.log(regExp2.test("1992-11-09"));

/**
 * 4-------windows file path
 *
 *
 */
/