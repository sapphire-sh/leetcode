/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const t = Array.from(new Array(grid[0].length)).map((_, i) => i);
    for(const row of grid) {
        const p = new Set(t);
        const u = {};

        const fn = (q) => {
            if(q === -1) {
                return -1;
            }

            if(q === 0 && row[0] === -1) {
                return -1;
            }

            if(q === row.length - 1 && row[row.length - 1] === 1) {
                return -1;
            }

            if(row[q] === 1) {
                if(row[q + 1] === -1) {
                    return -1;
                }
                else {
                    return q + 1;
                }
            }
            else {
                if(row[q - 1] === 1) {
                    return -1;
                }
                else {
                    return q - 1;
                }
            }
        };

        for(const q of p) {
            u[q] = fn(q);
        }

        for(let i = 0; i < t.length; ++i) {
            t[i] = u[t[i]];
        }
    }
    return t;
};
