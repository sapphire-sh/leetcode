/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const t = {};
    for(const a of arr) {
        if(t[a] === undefined) {
            t[a] = 1;
        }
        else {
            t[a] += 1;
        }
    }
    const x = Object.entries(t).filter(x => parseInt(x[0]) === x[1]).map(x => x[1]).sort((a, b) => a - b);
    if(x.length === 0) {
        return -1;
    }
    return x.pop();
};
