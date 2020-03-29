/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let t = [0,0,0];
    for(const num of nums) {
        ++t[num];
    }
    let i = 0;
    for(; i < t[0]; ++i) {
        nums[i] = 0;
    }
    for(; i < t[0] + t[1]; ++i) {
        nums[i] = 1;
    }
    for(; i < nums.length; ++i) {
        nums[i] = 2;
    }
};
