/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const t = {};
    for(const num of nums) {
        if(t[num] !== undefined) {
            return num;
        }
        t[num] = 1;
    }
};
