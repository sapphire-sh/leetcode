/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const x = [];
    function search(target, index, path) {
        if(target === 0) {
            return x.push(path);
        }
        if(target < 0) {
            return;
        }
        for(let i = index; i < candidates.length; ++i) {
            const a = candidates[i];
            const n = path.slice();
            n.push(a);
            search(target - a, i, n);
        }
    }
    search(target, 0, []);
    return x;
};
