class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;
        let maxLeft = 0,
            maxRight = 0;
        let result = 0;

        while (l < r) {
            maxLeft = Math.max(maxLeft, height[l]);
            maxRight = Math.max(maxRight, height[r]);

            if (maxLeft < maxRight) {
                const amountOfWater = maxLeft - height[l];
                if (amountOfWater > 0) {
                    result = result + amountOfWater;
                }
                l++;
            }else{
                const amountOfWater = maxRight - height[r]
                if(amountOfWater > 0){
                    result = result + amountOfWater
                }
                r--
            }
        }
        return result
    }
}
