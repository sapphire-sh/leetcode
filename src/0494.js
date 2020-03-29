/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    const t = {};
    function calc(index, sum) {
        if(index === nums.length) {
            return sum === S ? 1 : 0;
        }
        const num = nums[index];
        return calc(index + 1, sum + num) + calc(index + 1, sum - num);
    }
    return calc(0, 0);
};
