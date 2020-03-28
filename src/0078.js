/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const x = [[]];
    for(let i = 0; i < nums.length; ++i) {
        const y = [];
        for(let j = 0; j < x.length; ++j) {
            y.push([...x[j], nums[i]]);
        }
        x.push(...y);
    }
    return x;
};
