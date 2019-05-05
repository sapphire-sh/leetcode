/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let line = 0;
    let width = 0;
    const x = {};
    S.split('').forEach((e) => {
        if(x[e] === undefined) {
            x[e] = e.charCodeAt(0) - 97;
        }
        const c = widths[x[e]];
        if(width + c > 100) {
            ++line;
            width = 0;
        }
        width += c;
    });
    return [
        line + (width === 0 ? 0 : 1),
        width,
    ];
};
