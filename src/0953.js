/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const x = words.map(e => e.split('').map(e => String.fromCharCode(order.indexOf(e) + 97)).join(''));
    const a = x.join('\t');
    const b = x.sort().join('\t');
    return a === b;
};
