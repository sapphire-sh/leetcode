/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const x = text.split(' ');
    let a = [];
    for(let i = 0; i < (x.length - 2); ++i) {
        if(x[i] === first && x[i + 1] === second) {
            a.push(x[i + 2]);
        }
    }
    return a;
};
