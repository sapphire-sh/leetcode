/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const fn = (p, q) => {
        const x = [];
        for(let i = 0; i < p.length; ++i) {
            if(p[i] !== q[i]) {
                break;
            }
            x.push(p[i]);
        }
        return x.join('');
    };
    let p = strs[0];
    for(const str of strs) {
        if(p === '') {
            break;
        }
        p = fn(p, str);
    }
    return p;
};
