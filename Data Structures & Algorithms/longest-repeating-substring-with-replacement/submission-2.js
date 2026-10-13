class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let result = 0;

        let l = 0;

        for (let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);

            if(((r - l + 1) - Math.max(...count.values())) > k){
                count.set(s[l], count.get(s[l]) - 1) 
                l++
            }
            
            result = Math.max(result, r - l + 1)
        }

        return result
    }
}
