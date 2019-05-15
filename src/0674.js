/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
    let x = [ 1, ];
    for(let i = 1; i < nums.length; ++i) {
        if(nums[i - 1] < nums[i]) {
            x[i] = x[i - 1] + 1;
        }
        else {
            x[i] = 1;
        }
    }
    return Math.max(...x);
};
