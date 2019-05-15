/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if(name === typed) {
        return true;
    }
    if(name[0] !== typed[0]) {
        return false;
    }
    let x = 1;
    for(let i = 1; i < typed.length; ++i) {
        if(name[x] === typed[i]) {
            ++x;
            continue;
        }
        if(typed[i - 1] === typed[i]) {
            continue;
        }
        return false;
    }
    if(x < name.length) {
        return false;
    }
    return true;
};
