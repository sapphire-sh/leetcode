/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let a = 0;
    while((a * a) <= x) {
        a = a + 1;
    }
    return a - 1;
};
