/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid.length === 0 || grid[0].length === 0) { return 0; }
    const m = grid[0].length;
    const n = grid.length;
    const x = new Array(m).fill(new Array(n));
    for(let i = 0; i < m; ++i) {
        if(i === 0) {
            x[0][0] = grid[0][0];
        }
        else {
            x[i][0] = x[i - 1][0] + grid[0][i];
        }
        for(let j = 1; j < n; ++j) {
            if(i === 0) {
                x[i][j] = x[i][j - 1] + grid[j][i];
            }
            else {
                x[i][j] = Math.min(x[i - 1][j], x[i][j - 1]) + grid[j][i];
            }
        }
    }
    return x[m - 1][n - 1];
};
