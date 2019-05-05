/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let sum = A.reduce((a, b) => {
        return b % 2 === 0 ? a + b : a;
    }, 0);
    return queries.map((q) => {
        const [ v, i, ] = q;
        const p = A[i];
        A[i] += v;
        const n = A[i];
        if(n % 2 === 0) {
            if(p % 2 === 0) {
                sum += v;
            }
            else {
                sum += n;
            }
        }
        else {
            if(p % 2 === 0) {
                sum -= p;
            }
        }
        return sum;
    });
};
