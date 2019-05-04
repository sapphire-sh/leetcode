/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    return A.sort((a, b) => {
        const x = a % 2 === 0;
        const y = b % 2 === 0;
        if(x && y) {
            return 0;
        }
        if(x && !y) {
            return -1;
        }
        else {
            return 1;
        }
    });
};
