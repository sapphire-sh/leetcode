/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    function compare(B, i) {
        let prev = 0;
        for(let j = 0; j < B.length; ++j) {
            const x = B[j].charCodeAt(i);
            if(x < prev) {
                return false;
            }
            prev = x;
        }
        return true;
    }
    let count = 0;
    if(A.length === 0) {
        return count;
    }
    for(let i = 0; i < A[0].length; ++i) {
        if(compare(A, i) === false) {
            ++count;
        }
    }
    return count;
};
