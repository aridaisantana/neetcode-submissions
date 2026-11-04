class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let lastIndexes = new Map();
        let end = 0;
        let size = 0;
        const result = [];

        for (const char of S) {
            if (!lastIndexes.has(char)) {
                lastIndexes.set(char, S.lastIndexOf(char));
            }
        }

        for (let r = 0; r < S.length; r++) {
            size++
            end = Math.max(end, lastIndexes.get(S[r]));
            if (r === end) {
                result.push(size);
                size = 0;
            }
        }

        return result;
    }
}
