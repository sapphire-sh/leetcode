/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let t = {};
    for(const i of nums) {
        if(t[i] === undefined) {
            t[i] = 1;
        }
        else {
            delete t[i];
        }
    }
    return Object.keys(t)[0];
};
