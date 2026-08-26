class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const numbersMap = new Map()
       for(let i = 0; i < nums.length; i++){
            let neededNumber = target - nums[i];

            if(numbersMap.has(neededNumber)){
              return [numbersMap.get(neededNumber), i]
            }

            numbersMap.set(nums[i], i)
       }
    }
}
