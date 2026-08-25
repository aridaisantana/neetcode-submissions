class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let wordMap = new Map()
        for(let i = 0; i < strs.length ; i++){
            const orderedWord = strs[i].split('').sort().join('')
            if(!wordMap.has(orderedWord)){
                wordMap.set(orderedWord, [strs[i]])
            }else{
                wordMap.set(orderedWord, [...wordMap.get(orderedWord), strs[i]])
            }
        }
       let result = []
       for(const value of wordMap.values()){
        result = [...result, value]
       }
       return result
    }
}
