/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
function subdomain(domain) {
    const t = domain.split('.');
    const x = [];
    while(t.length > 0) {
        x.push(t.join('.'));
        t.shift();
    }
    return x;
}
var subdomainVisits = function(cpdomains) {
    const x = {};
    cpdomains.forEach((e) => {
        const t = e.split(' ');
        const c = parseInt(t[0]);
        subdomain(t[1]).forEach((e) => {
            if(x[e] === undefined) {
                x[e] = 0;
            }
            x[e] += c;
        });
    });
    return Object.keys(x).map((e) => {
        return `${x[e]} ${e}`;
    });
};
