/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    const a = N.toString(2).split('');
    let x = 0;
    let prev = -1;
    for(let i = 0; i < a.length; ++i) {
        if(a[i] === '0') {
            continue;
        }
        if(prev === -1) {
            prev = i;
        }
        else {
            const s = i - prev;
            x = Math.max(x, s);
            prev = i;
        }
    }
    return x;
};
