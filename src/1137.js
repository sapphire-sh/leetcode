/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const t = {
        0: 0,
        1: 1,
        2: 1,
    };
    const fn = n => {
        if(t[n] === undefined) {
            t[n] = fn(n - 1) + fn(n - 2) + fn(n - 3);
        }
        return t[n];
    };
    return fn(n);
};
