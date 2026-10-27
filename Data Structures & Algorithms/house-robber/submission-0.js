class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Map();
        const dfs = (i) => {
            if (i >= nums.length) return 0;

            if (cache.has(i)) {
               return cache.get(i);
            }
            
            cache.set(i, Math.max(nums[i] + dfs(i + 2), dfs(i + 1)));
            return cache.get(i)
        };

        return dfs(0)
    }
}
