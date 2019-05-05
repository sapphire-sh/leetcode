/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const t = [];
    while(A[0].length > 0) {
        const x = [];
        for(let j = 0; j < A.length; ++j) {
            x.push(A[j].shift());
        }
        t.push(x);
    }
    return t;
};
