class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxAmount = 0
        let l = 0, r = heights.length - 1
        for(let i = 0; i < heights.length; i++){
            maxAmount = Math.max(maxAmount, (r - l) * Math.min(heights[l], heights[r]))
            
            if(heights[l] < heights[r]){
                l++
            }else{
                r--
            }
        }
        return maxAmount
    }
}
