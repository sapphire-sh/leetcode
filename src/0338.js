/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const x = new Array(num + 1).fill(0);
    for(let i = 1; i <= num; ++i) {
        if(i % 2 === 1) {
            x[i] = x[i - 1] + 1;
        }
        else {
            if(x[i / 2] === 1) {
                x[i] = 1;
            }
            else {
                const p = Math.floor(Math.log2(i));
                const q = Math.pow(2, p);
                x[i] = 1 + x[i - q];
            }
        }
    }
    return x;
};
