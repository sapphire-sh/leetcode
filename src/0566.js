/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    const h = nums.length;
    const w = nums[0].length;

    if(h * w !== r * c) {
        return nums;
    }
    let x = [];
    for(const a of nums) {
        for(const b of a) {
            x.push(b);
        }
    }
    let t = [];
    for(let i = 0; i < r; ++i) {
        let u = [];
        for(let j = 0; j < c; ++j) {
            u.unshift(x.pop());
        }
        t.unshift(u);
    }
    return t;
};
