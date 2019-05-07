/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s = s.split('').sort();
    t = t.split('').sort();

    while(s.length > 0) {
        const a = s.pop();
        const b = t.pop();

        if(a !== b) {
            return b;
        }
    }
    return t[0];
};
