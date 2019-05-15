/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    function left(x, y) {
        return grid[y][x - 1] === 1;
    }
    function right(x, y) {
        return grid[y][x + 1] === 1;
    }
    function up(x, y) {
        if(grid[y - 1] === undefined) {
            return false;
        }
        return grid[y - 1][x] === 1;
    }
    function down(x, y) {
        if(grid[y + 1] === undefined) {
            return false;
        }
        return grid[y + 1][x] === 1;
    }
    if(grid.length === 0) {
        return 0;
    }
    if(grid[0].length === 0) {
        return 0;
    }
    let a = 0;
    let b = 0;
    for(let i = 0; i < grid.length; ++i) {
        for(let j = 0; j < grid[0].length; ++j) {
            if(grid[i][j] === 1) {
                ++a;
                if(left(j, i)) {
                    ++b;
                }
                if(right(j, i)) {
                    ++b;
                }
                if(up(j, i)) {
                    ++b;
                }
                if(down(j, i)) {
                    ++b;
                }
            }
        }
    }
    return a * 4 - b;
};
