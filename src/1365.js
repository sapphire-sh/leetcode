/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // return nums.map(x => nums.filter(y => y < x).length);
    const x = new Array(101).fill(0);
    for(const num of nums) {
        x[num] += 1;
    }
    for(let i = 1; i <= 100; ++i) {
        x[i] += x[i - 1];
    }
    return nums.map(num => num === 0 ? 0 : x[num - 1]);
};
