/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let s = "1";
    for(let i = 1; i < n; ++i) {
        let t = "";
        let prev = s[0];
        let count = 1;
        for(let j = 1; j < s.length; ++j) {
            if(s[j] === prev) {
                ++count;
            }
            else {
                t += `${count}${prev}`;
                prev = s[j];
                count = 1;
            }
        }
        t += `${count}${prev}`;
        s = t;
    }
    return s;
};
