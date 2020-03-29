/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const h = grid.length;
    if(h === 0) { return 0; }
    const w = grid[0].length;
    if(w === 0) { return 0; }
    function calc(x, y) {
        if(x === -1 || y === -1) {
            return;
        }
        if(x === w || y === h) {
            return;
        }
        if(grid[y][x] === '0') {
            return;
        }
        grid[y][x] = '0';
        calc(x - 1, y);
        calc(x + 1, y);
        calc(x, y - 1);
        calc(x, y + 1);
    }
    let x = 0;
    for(let i = 0; i < w; ++i) {
        for(let j = 0; j < h; ++j) {
            const a = grid[j][i];
            if(a === '1') {
                calc(i, j);
                ++x;
            }
        }
    }
    return x;
};
