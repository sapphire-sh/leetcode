/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    return grid.reduce((a, b) => {
        return a + b.filter(x => x < 0).length;
    }, 0);
};
