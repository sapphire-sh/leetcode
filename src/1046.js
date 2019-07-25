/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length === 1) {
        return stones[0];
    }
    stones = stones.sort((a, b) => a - b);
    const p = stones.pop();
    const q = stones.pop();
    stones.push(p - q);
    return lastStoneWeight(stones);
};
