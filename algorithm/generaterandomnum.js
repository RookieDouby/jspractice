/**
 * 生成范围内随机数字
 * Created by zhanghongdou on 2017/8/31.
 */

function generateRandomNum(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

console.log(generateRandomNum(1,100));

