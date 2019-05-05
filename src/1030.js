/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
function distance(x0, y0, x1, y1) {
    return Math.abs(x0 - x1) + Math.abs(y0 - y1);
}

var allCellsDistOrder = function(R, C, r0, c0) {
    const x = [];
    for(let i = 0; i < R; ++i) {
        for(let j = 0; j < C; ++j) {
            x.push([
                [ i, j, ],
                distance(r0, c0, i, j),
            ]);
        }
    }
    return x.sort((a, b) => a[1] - b[1]).map((e) => {
        return e[0];
    });
};
