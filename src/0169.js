/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    if(nums.length % 2 === 1) {
        return nums[(nums.length - 1) / 2];
    }
    else {
        const t = nums.pop();
        const a = nums[(nums.length - 1) / 2];
        const b = nums[(nums.length + 1) / 2];
        if(b === t) {
            return b;
        }
        else {
            return a;
        }
    }
};
