class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const curr = [];
        let sum = 0;

        const dfs = (i) => {
            if (sum === target) {
                result.push([...curr])
                return
            }

            if(i >= nums.length || sum > target) return

            curr.push(nums[i]);
            sum += nums[i];
            dfs(i);

            curr.pop();
            sum -= nums[i];
            dfs(i + 1);
        };
        dfs(0)
        return result
    }
}
