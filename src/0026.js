/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
    let prev = nums[0];
    for(let i = 1; i < nums.length; ++i) {
        if(nums[i] === prev) {
            nums.splice(i, 1);
            --i;
        }
        prev = nums[i];
    }
    return nums.length;
};
