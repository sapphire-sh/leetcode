/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const p = matrix.flat();
    const fn = (l, r) => {
        if(r < l) {
            return false;
        }
        const m = Math.floor((l + r + 1) / 2);
        if(p[m] === target) {
            return true;
        }
        if(p[m] < target) {
            return fn(m + 1, r);
        }
        else {
            return fn(l, m - 1);
        }
    };
    return fn(0, p.length - 1);
};
