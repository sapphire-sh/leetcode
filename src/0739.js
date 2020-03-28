/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    return T.map((x, i, a) => {
        let p;
        a.some((y, j) => {
            if(j < i) { return false; }
            if(y <= x) { return false; }
            p = j - i;
            return true;
        });
        return p || 0;
    });
};
