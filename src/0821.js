/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    const s = S.split('');
    const a = s.map((e, i) => {
        return e === C ? i : -1;
    }).filter(e => e !== -1);
    return s.map((e, i) => {
        const x = a.map(e => Math.abs(e - i));
        return Math.min(...x);
    });
};
