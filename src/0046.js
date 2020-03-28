/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length === 1) {
        return [nums];
    }
    const [a, ...b] = nums;
    const x = permute(b);
    const p = [];
    for(let i = 0; i < x.length; ++i) {
        const y = x[i];
        for(let j = 0; j < y.length + 1; ++j) {
            const z = [...y];
            z.splice(j, 0, a);
            p.push(z);
        }
    }
    return p;
};
