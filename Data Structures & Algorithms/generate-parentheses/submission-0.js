class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];
        let curr = "";
        let open = 0,
            close = 0;

        const dfs = (i) => {
            if (open === close && open === n) {
                result.push(curr);
                return;
            }

            if (open < n) {
                curr += "(";
                open++;
                dfs(i + 1);
                curr = curr.substring(0, curr.length - 1);
                open--
            }

            if (close < open) {
                curr += ")";
                close++;
                dfs(i + 1);
                curr = curr.substring(0, curr.length - 1);
                close--
            }
        };
        dfs(0);
        return result;
    }
}
