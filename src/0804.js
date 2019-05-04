/**
 * @param {string[]} words
 * @return {number}
 */
const a = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
var uniqueMorseRepresentations = function(words) {
    const x = {};
    words.map((e) => {
        return e.split('').map((e) => {
           return a[e.charCodeAt(0) - 97];
        }).join('');
    }).forEach((e) => {
        x[e] = 1;
    });
    return Object.keys(x).length;
};
