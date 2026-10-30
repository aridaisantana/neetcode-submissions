class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const mapCount1 = new Map(),
            mapCount2 = new Map();

        for (let i = 0; i < s.length; i++) {
            mapCount1.set(s.charAt(i), (mapCount1.get(s.charAt(i)) || 0) + 1);
            mapCount2.set(t.charAt(i), (mapCount2.get(t.charAt(i)) || 0) + 1);
        }

        for(const [key, value] of mapCount1.entries()){
            if(mapCount2.get(key) !== value) return false
        }

        return true
    }
}
