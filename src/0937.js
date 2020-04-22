/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const a = [];
    const b = [];
    const t = {};
    function calc(log) {
        const x = parseInt(t[log][1][0]);
        return isNaN(x);
    }
    for(const log of logs) {
        const x = log.split(' ');
        t[log] = [x.shift(), x.join(' ')];
        if(calc(log)) {
            a.push(log);
        }
        else {
            b.push(log);
        }
    }
    a.sort((a, b) => {
        return (t[a][1].localeCompare(t[b][1])) || (t[a][0].localeCompare(t[b][0]));
    });
    return [...a, ...b];
};
