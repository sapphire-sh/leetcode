/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(isBadVersion(1)) {
            return 1;
        }
        const fn = (l, r) => {
            if(r - l <= 1) {
                return r;
            }
            const m = Math.floor((l + r) / 2);
            if(isBadVersion(m)) {
                return fn(l, m);
            }
            else {
                return fn(m, r);
            }
        }
        return fn(1, n);
    };
};
