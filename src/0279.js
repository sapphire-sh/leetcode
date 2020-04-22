/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // const t = [];
    // let a = 1;
    // while(a * a <= n) {
    //     t.push(a * a);
    //     a += 1;
    // }
    // function calc(index, sum, count) {
    //     if(index >= t.length) {
    //         return Infinity;
    //     }
    //     if(sum < 0) {
    //         return Infinity;
    //     }
    //     if(sum === 0) {
    //         return count;
    //     }
    //     const b = t[index];
    //     const p = calc(index, sum - b, count + 1);
    //     const q = calc(index + 1, sum, count);
    //     return Math.min(p, q);
    // }
    // return calc(0, n, 0);
    const x = new Array(n + 1).fill(Infinity);
    x[0] = 0;
    for(let i = 1; i <= n; ++i) {
        for(let j = 1; j * j <= i; ++j) {
            x[i] = Math.min(x[i], x[i - j * j] + 1);
        }
    }
    return x[n];
};
