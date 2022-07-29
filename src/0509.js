/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    const t = {
        0: 0,
        1: 1,
    };
    const fn = n => {
        if(t[n] === undefined) {
            t[n] = fn(n - 1) + fn(n - 2);
        }
        return t[n];
    }
    return fn(n);
};
