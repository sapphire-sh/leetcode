/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const a = {};
    for(const i of nums1) {
        a[i] = 1;
    }
    const b = {};
    for(const i of nums2) {
        if(a[i] === 1) {
            b[i] = 1;
        }
    }
    return Object.keys(b);
};
