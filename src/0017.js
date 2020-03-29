/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const t = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    const x = [];
    function calc(index, s) {
        if(index === digits.length) {
            if(index !== 0) {
                x.push(s);
            }
            return;
        }
        const digit = digits[index];
        const a = t[digit];
        for(const x of a) {
            calc(index + 1, s + x);
        }
    }
    calc(0, '');
    return x;
};
