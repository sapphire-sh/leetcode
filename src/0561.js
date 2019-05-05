/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b).filter((e, i) => {
        return i % 2 === 0;
    }).reduce((a, b) => a + b, 0);
};
