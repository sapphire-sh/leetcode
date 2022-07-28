/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const fn = (l, r) => {
        if(l === r) {
            return l;
        }
        const m = Math.floor((l + r) / 2);
        // console.log(l, m, r);
        if(nums[m] === target) {
            return m;
        }
        if(nums[m] < target) {
            return fn(m + 1, r);
        }
        else {
            return fn(l, m);
        }
    }
    const p = fn(0, nums.length - 1);
    return nums[p] < target ? p + 1 : p;
};
