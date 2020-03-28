/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const l = new Array(nums.length);
    const r = new Array(nums.length);
    for(let i = 0; i < nums.length; ++i) {
        if(i === 0) {
            l[i] = nums[i];
        }
        else {
            l[i] = l[i - 1] * nums[i];
        }
    }
    for(let i = nums.length - 1; i >= 0; --i) {
        if(i === nums.length - 1) {
            r[i] = nums[i];
        }
        else {
            r[i] = r[i + 1] * nums[i];
        }
    }
    return nums.map((_, i) => {
        if(i === 0) {
            return r[1];
        }
        if(i === nums.length - 1) {
            return l[i - 1];
        }
        return l[i - 1] * r[i + 1];
    });
};
