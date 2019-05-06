/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const t = n.toString(2).split('');
    let prev = t.pop();
    while(t.length > 0) {
        const curr = t.pop();
        if(prev === curr) {
            return false;
        }
        prev = curr;
    }
    return true;
};
