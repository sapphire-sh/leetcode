/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    let res = 0;
    let y = x;
    while(y !== 0) {
        const a = y % 10;
        y = (y - a) / 10;
        res = res * 10 + a;
    }
    return res === x;
};
