/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const x = new Array(m).fill(new Array(n));
    for(let i = 0; i < m; ++i) {
        if(i === 0) {
            x[i][0] = 1;
        }
        else {
            x[i][0] = x[i - 1][0];
        }
        for(let j = 1; j < n; ++j) {
            if(i === 0) {
                x[i][j] = 1;
            }
            else {
                x[i][j] = x[i - 1][j] + x[i][j - 1];
            }
        }
    }
    return x[m - 1][n - 1];
};
