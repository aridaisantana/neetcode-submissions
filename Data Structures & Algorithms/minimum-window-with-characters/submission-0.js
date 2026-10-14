class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";
        let l = 0;
        const charMap = new Map();
        for (let i = 0; i < t.length; i++) {
            charMap.set(t.charAt(i), (charMap.get(t.charAt(i)) || 0) + 1);
        }

        let have = 0;
        const need = charMap.keys().toArray().length;
        let result = [-1, -1];
        let resultLength = Infinity;
        const window = new Map();

        for (let r = 0; r < s.length; r++) {
            const char = s.charAt(r);
            window.set(char, (window.get(char) || 0) + 1);

            if (charMap.has(char) && window.get(char) === charMap.get(char)) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < resultLength) {
                    result = [l, r];
                    resultLength = r - l + 1;
                }

                if (charMap.has(s.charAt(l))) {
                    window.set(s.charAt(l), window.get(s.charAt(l)) - 1);
                }
                if (
                    charMap.has(s.charAt(l)) &&
                    window.get(s.charAt(l)) < charMap.get(s.charAt(l))
                ) {
                    have--;
                }
                l++;
            }
        }
        l = result[0]
        let r = result[1]
        return resultLength !== Infinity ? s.substring(l, r + 1) : ''
    }
}
