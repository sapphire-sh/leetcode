/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const a = {};
    A.split(' ').forEach((e) => {
        if(a[e] === undefined) {
            a[e] = 0;
        }
        ++a[e];
    });
    const b = {};
    B.split(' ').forEach((e) => {
        if(b[e] === undefined) {
            b[e] = 0;
        }
        ++b[e];
    });
    const x = {};
    Object.keys(a).forEach((e) => {
        x[e] = a[e];
    });
    Object.keys(b).forEach((e) => {
        if(x[e] === undefined) {
            x[e] = 0;
        }
        x[e] += b[e];
    });
    return Object.keys(x).filter((e) => {
        return x[e] === 1;
    });
};
