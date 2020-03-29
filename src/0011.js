/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // let t = -1;
    // for(let i = 0; i < height.length - 1; ++i) {
    //     for(let j = i + 1; j < height.length; ++j) {
    //         const x = j - i;
    //         const y = Math.min(height[i], height[j]);
    //         const a = x * y;
    //         if(t < a) {
    //             t = a;
    //         }
    //     }
    // }
    // return t;
    function calc(l, r) {
        const x = r - l;
        if(x <= 0) { return 0; }
        const y = Math.min(height[l], height[r]);
        const a = x * y;
        if(height[l] < height[r]) {
            const b = calc(l + 1, r);
            return Math.max(a, b);
        }
        else {
            const b = calc(l, r - 1);
            return Math.max(a, b);
        }
    }
    return calc(0, height.length - 1);
};
