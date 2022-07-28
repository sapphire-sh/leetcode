/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const t = {};
    const fn = x => {
        let p = 0;
        while(x !== 0) {
            const q = x % 10;
            p += q * q;
            x -= q;
            x /= 10;
        }
        return p;
    };
    while(true) {
        if(n === 1) {
            return true;
        }
        if(t[n]) {
            return false;
        }
        const p = fn(n);
        t[n] = p;
        n = p;
    }
};
