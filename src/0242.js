/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const x = {};
    for(const a of s) {
        if(x[a] === undefined) {
            x[a] = 0;
        }
        ++x[a];
    }
    for(const b of t) {
        --x[b];
    }
    return Object.values(x).every(x => x === 0);
};
