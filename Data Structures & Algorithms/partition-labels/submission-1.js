class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let lastIndexes = new Map();
        let end = 0;
        let l = 0;
        const result = [];

        for (const char of S) {
            if (!lastIndexes.has(char)) {
                lastIndexes.set(char, S.lastIndexOf(char));
            }
        }

        for (let r = 0; r < S.length; r++) {
            end = Math.max(end, lastIndexes.get(S[r]));
            if (r === end) {
                result.push(r - l + 1);
                l = r + 1
            }
        }

        return result;
    }
}
