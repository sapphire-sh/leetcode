/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map(e => e * e).sort((a, b) => (a - b));
};
