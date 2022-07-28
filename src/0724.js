/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    const p = nums.reduce((a, b) => a + b, 0);

    let q = 0;
    let r = p;
    for(let i = 0; i < nums.length; ++i) {
        const s = nums[i];

        r = r - s;

        if(q === r) {
            return i;
        }
        q = q + s;
    }

    return -1;
};
