/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const t = {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h", 9: "i", 10: "j", 11: "k", 12: "l", 13: "m", 14: "n", 15: "o", 16: "p", 17: "q", 18: "r", 19: "s", 20: "t", 21: "u", 22: "v", 23: "w", 24: "x", 25: "y", 26: "z"};
    const x = s.split('');
    let p = '';
    while(x.length > 0) {
        const a = x.pop();
        let u;
        if(a === '#') {
            const b = x.pop();
            const c = x.pop();
            u = t[`${c}${b}`];
        }
        else {
            u = t[a];
        }
        p = `${u}${p}`;
    }
    return p;
};
