/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(e => e.reverse().map(e => e === 0 ? 1 : 0));
};
