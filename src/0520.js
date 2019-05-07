/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const a = 'abcdefghijklmnopqrstuvwxyz';
    const b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if(word.toUpperCase() === word) {
        return true;
    }
    if(word.toLowerCase() === word) {
        return true;
    }
    if(b.indexOf(word[0]) !== -1) {
        const x = word.substr(1, word.length);
        if(x.toLowerCase() === x) {
            return true;
        }
        return false;
    }
    return false;
};
