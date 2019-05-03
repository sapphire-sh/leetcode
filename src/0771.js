/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const m = S.match(new RegExp(`[${J}]+`, 'g'));
    if(m === null) {
        return 0;
    }
    return m.join('').length;
};
