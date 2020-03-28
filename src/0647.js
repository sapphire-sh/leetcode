7/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    function check(s) {
        return s.split('').reverse().join('') === s;
    }
    let x = 0;
    for(let i = 0; i < s.length; ++i) {
        for(let j = i + 1; j <= s.length; ++j) {
            const a = s.substring(i, j);
            if(check(a)) {
                x += 1;
            }
        }
    }
    return x;
};
