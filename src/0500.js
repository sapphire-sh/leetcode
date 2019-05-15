/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const a = /^[qwertyuiop]*$/i;
    const b = /^[asdfghjkl]*$/i;
    const c = /^[zxcvbnm]*$/i;
    return words.filter(word => {
        if(word.match(a) !== null) {
            return true;
        }
        if(word.match(b) !== null) {
            return true;
        }
        if(word.match(c) !== null) {
            return true;
        }
        return false;
    });
};
