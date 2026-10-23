class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let L = 0
        let maxSum = nums[0]
        let currentSum = 0

        for(let R = 0; R < nums.length; R++){
            
            if(currentSum < 0) {
                currentSum = 0
                L = R
            }

            currentSum += nums[R]
            maxSum = Math.max(maxSum, currentSum)
        }
        return maxSum
    }
}
