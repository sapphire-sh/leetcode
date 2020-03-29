/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // return nums.sort((a, b) => b - a)[k - 1];
    function search(l, r) {
        function swap(i, j) {
            const t = nums[i];
            nums[i] = nums[j];
            nums[j] = t;
        }
        function partition(l, r) {
            let p = l;
            for(let i = p; i <= r; ++i) {
                if(nums[i] <= nums[r]) {
                    swap(p, i);
                    ++p;
                }
            }
            return p - 1;
        }
        const pivot = r;
        const index = partition(l, r);
        const t = nums.length - k;
        if(index === t) { return nums[t]; }
        if(index < t) {
            return search(index + 1, r);
        }
        else {
            return search(l, index - 1);
        }
    }
    return search(0, nums.length - 1);
};
