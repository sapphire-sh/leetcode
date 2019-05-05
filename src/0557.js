/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map((e) => {
        return e.split('').reverse().join('');
    }).join(' ');
};
