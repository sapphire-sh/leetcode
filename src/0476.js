/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return parseInt(num.toString(2).split('').map(e => e === '0' ? '1' : '0').join(''), 2);
};
