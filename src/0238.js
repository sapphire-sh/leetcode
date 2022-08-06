/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    const p = [];
    const q = [];
    for(let i = 0; i < nums.length; ++i) {
        const x = nums[i];
        const y = nums[nums.length - 1 - i];
        if(i === 0) {
            p.push(x);
            q.push(y);
        }
        else {
            p.push(p[i - 1] * x);
            q.push(q[i - 1] * y);
        }
    }
    q.reverse();

    const r = [];
    for(let i = 0; i < nums.length; ++i) {
        const x = p[i - 1] ?? 1;
        const y = q[i + 1] ?? 1;

        r.push(x * y);
    }

    return r;
};
