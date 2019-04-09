/**
 * @param {string} s
 * @return {boolean}
 */
const map = {
    '(': ')',
    '{': '}',
    '[': ']',
};
var isValid = function(s) {
    const stack = [];
    for(let i = 0; i < s.length; ++i) {
        switch(s[i]) {
            case '(':
            case '{':
            case '[': {
                stack.push(s[i]);
                break;
            }
            case ')':
            case '}':
            case ']': {
                if(map[stack.pop()] !== s[i]) {
                    return false;
                }
                break;
            }
            default: {
                return false;
            }
        }
    }
    return stack.length === 0;
};
