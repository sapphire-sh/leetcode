/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    if(people.length === 0) {
        return [];
    }
    const x = new Array(people.length);
    const p = people.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]));
    const a = p.shift();
    x[a[1]] = a;
    while(p.length > 0) {
        const a = p.shift();
        let count = 0;
        for(let i = 0; i < x.length; ++i) {
            if(x[i] !== undefined) {
                if(x[i][0] === a[0]) {
                    ++count;
                }
                continue;
            }
            if(count === a[1]) {
                x[i] = a;
                break;
            }
            else {
                ++count;
            }
        }
    }
    return x;
};
