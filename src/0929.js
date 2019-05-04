/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const x = {};
    emails.map((e) => {
        return e.split('@').map((e, i) => {
            if(i === 0) {
                return e.replace(/\./g, '').split('+')[0];
            }
            return e;
        }).join('@');
    }).forEach((e) => {
       x[e] = 1;
    });
    return Object.keys(x).length;
};
