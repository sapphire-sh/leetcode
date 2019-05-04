/**
 * @param {number[]} A
 * @return {number}
 */

var repeatedNTimes = function(A) {
    const x = {};
    for(const a of A) {
        if(x[a] === 1) {
            return a;
        }
        x[a] = 1;
    }
};
