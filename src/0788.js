/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    const p = {
        '0': '0',
        '1': '1',
        '8': '8',
    }
    const q = {
        '2': '5',
        '5': '2',
        '6': '9',
        '9': '6',
    };
    function rotate(x) {
        let isDifferent = false;
        for(let i = 0; i < x.length; ++i) {
            const a = x[i];
            if(p[a] !== undefined) {
                continue;
            }
            if(q[a] !== undefined) {
                isDifferent = true;
                continue;
            }
            return false;
        }
        return isDifferent;
    }
    let count = 0;
    for(let i = 1; i <= N; ++i) {
        if(rotate(i.toString()) === true) {
            ++count;
        }
    }
    return count;
};
