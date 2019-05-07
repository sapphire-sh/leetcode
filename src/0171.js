/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    const x = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const a = s.split('');
    let q = 0;
    let i = 0;
    while(a.length > 0) {
        const n = a.pop();
        q += x.indexOf(n) * Math.pow(26, i);
        ++i;
    }
    return q;
};
