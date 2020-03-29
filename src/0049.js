/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // const t = {};
    // strs.forEach(x => {
    //     const a = x.split('').sort().join('');
    //     if(t[a] === undefined) {
    //         t[a] = [];
    //     }
    //     t[a].push(x);
    // });
    // return Object.values(t);
    const q = 'a'.charCodeAt(0);
    const t = {};
    strs.forEach(x => {
        const a = new Array(26);
        for(let i = 0; i < x.length; ++i) {
            const b = x[i].charCodeAt(0) - q;
            if(a[b] === undefined) {
                a[b] = 1;
            }
            else {
                a[b] += 1;
            }
        }
        const p = JSON.stringify(a);
        if(t[p] === undefined) {
            t[p] = [];
        }
        t[p].push(x);
    });
    return Object.values(t);
};
