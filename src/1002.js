/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    const a = A.map((e) => {
        const x = {};
        for(const c of e) {
            if(x[c] === undefined) {
                x[c] = 0;
            }
            ++x[c];
        }
        return x;
    });
    return Object.keys(a[0]).map((e) => {
        const x = a.map(x => x[e] || 0);
        return Array.from(Array(Math.min(...x))).map(_ => e);
    }).reduce((a, b) => {
        return a.concat(b);
    }, []);
};
