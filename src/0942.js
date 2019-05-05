/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let a = 0;
    let s = Array.from(Array(S.length + 1)).map((e, i) => i);
    const x = S.split('').map(e => {
        return e === 'I' ? s.shift() : s.pop();
    });
    x.push(s.pop());
    return x;
};
