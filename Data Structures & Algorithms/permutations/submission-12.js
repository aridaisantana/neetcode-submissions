class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];

        const dfs = (i, nums) => {
            if (i >= nums.length) {
                result.push([...nums]);
                return;
            }

            for (let j = i; j < nums.length; j++) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                dfs(i + 1, nums);
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        };
        dfs(0, nums);
        return result;
    }
}
