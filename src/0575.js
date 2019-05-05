/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const a = [...new Set(candies)].length;
    if(a >= candies.length / 2) {
        return candies.length / 2;
    }
    else {
        return a;
    }
};
