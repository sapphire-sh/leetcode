/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const x = {};
    for(const n of nums) {
        if(x[n] === undefined) {
            x[n] = 1;
        }
        else {
            return true;
        }
    }
    return false;
};
