class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0
        let maxLength = 0
        let charSet = new Set()

        for(let r = 0; r < s.length; r++){
            while(charSet.has(s[r])){
                charSet.delete(s[l])
                l++
            }

            charSet.add(s[r])
            maxLength = Math.max(maxLength, r - l + 1)
        }
        return maxLength
    }
}
