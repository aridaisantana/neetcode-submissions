class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexSeen = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (indexSeen.has(nums[i])) {
                return [indexSeen.get(nums[i]), i];
            }
                indexSeen.set(target - nums[i], i);
        }
    }
}
