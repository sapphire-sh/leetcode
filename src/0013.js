/**
 * @param {string} s
 * @return {number}
 */
const x = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};
const y = [
    'I',
    'V',
    'X',
    'L',
    'C',
    'D',
    'M',
];
var romanToInt = function(s) {
    const t = s.split('');
    let r = 0;
    let prev = -1;
    while(t.length > 0) {
        const a = t.pop();
        const i = y.indexOf(a);
        if(prev === -1) {
            prev = i;
        }
        if(i < prev) {
            r -= x[a];
        }
        else {
            r += x[a];
            prev = i;
        }
    }
    return r;
};
