class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numsWithFrequency = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (!numsWithFrequency.has(nums[i])) {
                numsWithFrequency.set(nums[i], 1);
            } else {
                numsWithFrequency.set(nums[i], numsWithFrequency.get(nums[i]) + 1);
            }
        }
        let maxFrequencies = new Array(nums.length + 1);
        for (const [key, value] of numsWithFrequency) {
            if (maxFrequencies[value]) {
                maxFrequencies[value].push(key);
            } else {
                maxFrequencies[value] = [key];
            }
        }
        let result = new Array();
        for(let i = maxFrequencies.length - 1; i >= 0; i--){
            if(result.length === k) return result;

            if(maxFrequencies[i]){
                result.push(...maxFrequencies[i])

                if(result.length >= k){
                    return result.slice(0, k)
                }
            }
        }
    }
}
