/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    const t = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const a = [];
    S.split('').forEach((e) => {
        if(t.indexOf(e) !== -1) {
            a.push(e);
        }
    });
    return S.split('').map((e) => {
        if(t.indexOf(e) !== -1) {
            return a.pop();
        }
        return e;
    }).join('');
};
