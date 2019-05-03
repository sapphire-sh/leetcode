/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const map = {};
	for(const i in nums) {
		const a = nums[i];
		const j = map[target - a];
		if(j === undefined) {
			map[a] = i;
		}
		else {
			if(i === j) {
				continue;
			}
			return [
				i,
				j,
			];
		}
	}
	return null;
};
