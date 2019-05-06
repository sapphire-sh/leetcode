/**
 * @param {number[]} A
 * @return {boolean}
 */
function filter(A) {
    const B = [];
    let prev = null;
    for(let i = 0; i < A.length; ++i) {
        if(prev !== A[i]) {
            B.push(A[i]);
        }
        prev = A[i];
    }
    return B;
}
var isMonotonic = function(A) {
    A = filter(A);
    let isIncreasing = A[0] <= A[1];
    for(let i = 1; i < A.length; ++i) {
        if(isIncreasing) {
            if(A[i - 1] > A[i]) {
                return false;
            }
        }
        else {
            if(A[i - 1] < A[i]) {
                return false;
            }
        }
    }
    return true;
};
