/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const a = S.split('');
    const x = [];
    for(let i = 0; i < a.length; ++i) {
        if(a[i] === a[i + 1]) {
            i += 1;
            continue;
        }
        x.push(a[i]);
    }
    const b = x.join('');
    if(S === b) {
        return b;
    }
    else {
        return removeDuplicates(b);
    }
};
