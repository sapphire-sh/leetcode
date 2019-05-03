/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const t = [];
    for(let i = 0; i < numRows; ++i) {
        const a = [];
        if(i === 0) {
            a.push(1);
        }
        else {
            for(let j = 0; j < (i + 1); ++j) {
                if(j === 0) {
                    a.push(1);
                }
                else if(j === i) {
                    a.push(1);
                }
                else {
                    a.push(t[i - 1][j - 1] + t[i - 1][j]);
                }
            }
        }
        t.push(a);
    }
    return t;
};
