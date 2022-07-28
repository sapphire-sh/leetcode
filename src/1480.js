/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let c = 0;
    return nums.map(x => {
        c += x;
        return c;
    });
};
