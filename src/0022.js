/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const x = [];
    function calc(s, l, r) {
        if(s.length === 2 * n) {
            return x.push(s);
        }
        if(l < n) {
            calc(`${s}(`, l + 1, r);
        }
        if(r < l) {
            calc(`${s})`, l, r + 1);
        }
    }
    calc('', 0, 0);
    return x;
};
