/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    return mat.map((x, i) => {
        const c = x.filter(x => x === 1).length;
        return [c, i];
    }).sort((a, b) => {
        return (a[0] - b[0]) || (a[1] - b[1]);
    }).filter((_, i) => i < k).map(x => x[1]);
};
