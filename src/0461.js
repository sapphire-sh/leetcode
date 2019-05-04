/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let a = x.toString(2);
    let b = y.toString(2);
    const l = Math.max(a.length, b.length);
    a = a.padStart(l, '0');
    b = b.padStart(l, '0');
    let s = 0;
    for(let i = 0; i < l; ++i) {
        if(a[i] !== b[i]) {
            ++s;
        }
    }
    return s;
};
