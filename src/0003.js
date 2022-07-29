/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let p = 0;
    let q = 0;
    for(let i = 0; i < s.length; ++i) {
        const r = s.substring(p, q);
        const x = s[i];
        const index = r.indexOf(x);
        if(index !== -1) {
            p += index + 1;
        }
        q += 1;
        max = Math.max(max, q - p)
    }
    return max;
};
