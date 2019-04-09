/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length < 1) {
        return '';
    }
    if(strs.length < 2) {
        return strs[0];
    }
    let c = [];
    let i = 0;
    while(true) {
        const a = strs[0][i];
        if(a === undefined) {
            break;
        }
        let skip = false;
        for(let j = 1; j < strs.length; ++j) {
            const b = strs[j][i];
            if(a !== b) {
                skip = true;
                break;
            }
        }
        if(skip === true) {
            break;
        }
		++i;
		c.push(a);
    }
    return c.join('');
};
