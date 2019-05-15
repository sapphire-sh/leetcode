/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let x = num.toString();
    while(x.length > 1) {
        x = x.split('').map(e => parseInt(e)).reduce((a, b) => a + b, 0).toString();
    }
    return parseInt(x);
};
