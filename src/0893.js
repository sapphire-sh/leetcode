/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    const x = {};
    for(const a of A) {
        const b = a.split('');
        const p = b.filter((e, i) => i % 2 === 0).sort().join('');
        const q = b.filter((e, i) => i % 2 === 1).sort().join('');
        x[`${p} ${q}`] = 1;
    }
    return Object.keys(x).length;
};
