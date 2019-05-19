/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    function xy() {
        return grid.map(e => {
            return e.filter(e => e !== 0).length;
        }).reduce((a, b) => (a + b), 0);
    }
    function yz() {
        return grid.map(e => {
            return Math.max(...e, 0);
        }).reduce((a, b) => (a + b), 0);
    }
    function zx() {
        let sum = 0;
        if(grid.length === 0) {
            return sum;
        }
        for(let i = 0; i < grid[0].length; ++i) {
            let s = 0;
            for(let j = 0; j < grid.length; ++j) {
                s = Math.max(s, grid[j][i]);
            }
            sum += s;
        }
        return sum;
    }
    return xy() + yz() + zx();
};
