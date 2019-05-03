/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    const s = S.split('');
    let depth = 0;
    const x = [];
    while(s.length > 0) {
        const t = s.shift();
        if(t === ')') {
            --depth;
        }
        if(depth > 0) {
            x.push(t);
        }
        if(t === '(') {
            ++depth;
        }
    }
    return x.join('');
};
