/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const x = {};
    Array.from(Array(nums.length)).map((e, i) => i + 1).forEach((e) => {
       x[e] = 1;
    });
    for(const n of nums) {
        delete x[n];
    }
    return Object.keys(x);
};
