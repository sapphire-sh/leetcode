/**
 * @param {number} N
 * @return {number}
 */
const x = {
    0: 0,
    1: 1,
};
var fib = function(N) {
    if(x[N] === undefined) {
        x[N] = fib(N - 1) + fib(N - 2);
    }
    return x[N];
};
