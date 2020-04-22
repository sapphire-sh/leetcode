/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const t = {};
    function calc(a) {
        if(t[a] !== undefined) {
            return t[a];
        }
        t[a] = a.toString(2).split('').filter(x => x === '1').length;
        return t[a];
    }
    return arr.sort((a, b) => {
        const x = calc(a);
        const y = calc(b);
        return (x - y) || (a - b);
    });
};
