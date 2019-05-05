/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    const x = [];
    while(A.length > 0) {
        const a = A.shift();
        if((x.length % 2) === (a % 2)) {
            x.push(a);
        }
        else {
            A.push(a);
        }
    }
    return x;
};
