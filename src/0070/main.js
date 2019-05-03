/**
 * @param {number} n
 * @return {number}
 */
const a = {
    1: 1,
    2: 2,
};
function climb(n) {
    if(a[n] === undefined) {
        a[n] = climb(n - 1) + climb(n - 2);
    }
    return a[n];
}

var climbStairs = function(n) {
    return climb(n);
};
