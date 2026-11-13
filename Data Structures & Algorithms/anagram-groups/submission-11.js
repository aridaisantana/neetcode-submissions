class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupedAnagrams = new Map();

        for (let i = 0; i < strs.length; i++) {
            const canonicalAbstraction = new Array(26).fill(0);

            for (let j = 0; j < strs[i].length; j++) {
                canonicalAbstraction[strs[i][j].charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            const key = canonicalAbstraction.join("#");
            if (!groupedAnagrams.has(key)) groupedAnagrams.set(key, []);

            groupedAnagrams.get(key).push(strs[i]);
        }

        const result = [];
        for (const group of groupedAnagrams.values()) {
            result.push(group);
        }

        return result;
    }
}
