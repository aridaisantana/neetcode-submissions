class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        candidates.sort((a, b) => a - b)

        const dfs = (i, cur, total) => {
            if (total === target) {
                result.push([...cur]);
                return;
            }

            if (i >= candidates.length || total > target) {
                return;
            }

            cur.push(candidates[i]);
            dfs(i + 1, cur, total + candidates[i])
            cur.pop()

            while(i + 1 < candidates.length && candidates[i] === candidates[i + 1]){
                i++
            }

            dfs(i + 1, cur, total)
        };
        dfs(0, [], 0);
        return result;
    }
}
