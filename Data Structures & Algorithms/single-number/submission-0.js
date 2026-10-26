class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const map = new Map();
        for (const num of nums) {
            if (!map.has(num)) {
                map.set(num, 1);
            } else {
                map.set(num, map.get(num) + 1);
            }
        }

        for(const [key, value] of map.entries()){
            if(value === 1) return key
        }
    }
}
