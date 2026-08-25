class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let wordAndKey = new Map();
        for (let i = 0; i < strs.length; i++) {
            let canonicalRepresentation = new Array(26).fill(0);
            for (let j = 0; j < strs[i].length; j++) {
                canonicalRepresentation[strs[i].charAt(j).charCodeAt(0) - 97]++;
            }
            const key = canonicalRepresentation.join("#");
            if (!wordAndKey.has(key)) {
                wordAndKey.set(key, [strs[i]]);
            } else {
                wordAndKey.set(key, [...wordAndKey.get(key), strs[i]]);
            }
        }
        return Array.from(wordAndKey.values());
    }

    /*
    * Primera solucion: O(n * k log(k) )
    *  groupAnagrams(strs) {
        let wordMap = new Map()
        for(let i = 0; i < strs.length ; i++){
            const orderedWord = strs[i].split('').sort().join('')
            if(!wordMap.has(orderedWord)){
                wordMap.set(orderedWord, [strs[i]])
            }else{
                wordMap.set(orderedWord, [...wordMap.get(orderedWord), strs[i]])
            }
        }
       return Array.from(wordMap.values())
    }
     */
}
