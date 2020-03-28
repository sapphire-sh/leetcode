/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const x = {};
    for(const num of nums) {
        if(x[num] === undefined) {
            x[num] = 1;
        }
        else {
            x[num] += 1;
        }
    }
    return Object.entries(x).sort((a, b) => b[1] - a[1]).filter((_, i) => i < k).map(x => x[0]);
};
