/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let x = 0;
    for(const n of nums) {
        if(n === 1) {
            ++x;
        }
        else {
            x = 0;
        }
        max = Math.max(max, x);
    }
    return max;
};
