/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let hasZero = false;
    let max = -1;
    let sum = 0;
    for(const num of nums) {
        max = Math.max(max, num);
        sum += num;
        if(num === 0) {
            hasZero = true;
        }
    }
    let x = max * (max + 1) / 2;
    if(!hasZero && max === nums.length) {
        return 0;
    }
    if(x === sum) {
        return max + 1;
    }
    return x - sum;
};
