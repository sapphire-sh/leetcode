/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    return Array.from(Array(right - left + 1)).map((e, i) => {
        return i + left;
    }).map((e) => {
        return [ e, e.toString(), ];
    }).filter((e) => {
        return e[1].indexOf('0') === -1;
    }).filter((e) => {
        return e[1].split('').map((e) => {
            return parseInt(e);
        }).every((f) => {
           return e[0] % f === 0;
        });
    }).map((e) => {
        return e[0];
    });
};
