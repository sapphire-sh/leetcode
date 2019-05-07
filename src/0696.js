/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    const x = [0];
    let prev = s[0];
    let index = 0;
    for(let i = 0; i < s.length; ++i) {
        if(s[i] === prev) {
            ++x[index];
        }
        else {
            ++index;
            x[index] = 1;
        }
        prev = s[i];
    }
    let sum = 0;
    for(let i = 1; i < x.length; ++i) {
        sum += Math.min(x[i - 1], x[i]);
    }
    return sum;
};
