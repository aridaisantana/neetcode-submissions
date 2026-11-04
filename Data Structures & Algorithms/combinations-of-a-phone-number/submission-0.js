class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits) return [];
        const result = [];
        let curr = "";

        const digitToChar = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "qprs",
            8: "tuv",
            9: "wxyz",
        };

        const dfs = (i) => {
            if (i >= digits.length) {
                result.push(curr);
                return;
            }

            for (const c of digitToChar[digits[i]]) {
                curr += c;
                dfs(i + 1);
                curr = curr.substring(0, curr.length - 1);
            }
        };

        dfs(0);
        return result;
    }
}
