class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        const curr = [];
        let sum = 0;
        candidates.sort((a, b) => a - b)

        const dfs = (i) => {
            if (sum === target) {
                result.push([...curr]);
                return;
            }

            if (i >= candidates.length || sum > target) return;

            curr.push(candidates[i]);
            sum += candidates[i];
            dfs(i + 1);

            curr.pop();
            sum -= candidates[i];
            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
                i++;
            }

            dfs(i + 1);
        };

        dfs(0);
        return result;
    }
}
