/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;
    for(const a of arr1) {
        let f = true;
        for(const b of arr2) {
            const c = Math.abs(a - b);
            if(c <= d) {
                f = false;
                break;
            }
        }
        if(f) {
            ++count;
        }
    }
    return count;
};
