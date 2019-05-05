/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    const a = N.toString(2).split('').map(e => e === '0' ? '1' : '0').join('');
    return parseInt(a, 2);
};
