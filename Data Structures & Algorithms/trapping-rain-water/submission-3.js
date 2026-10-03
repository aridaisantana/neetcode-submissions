class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let maxLeft = 0, maxRight = 0;
        let l = 0, r = height.length - 1;
        let res = 0;

        while(l < r){
            maxLeft = Math.max(maxLeft, height[l])
            maxRight = Math.max(maxRight, height[r])

            if(maxLeft < maxRight){
                const amountOfWater = maxLeft - height[l]
                if(amountOfWater > 0){
                    res = res + amountOfWater
                }
                l++;
            }else{
                const amountOfWater = maxRight - height[r]
                if(amountOfWater > 0){
                    res = res + amountOfWater
                }
                r--;
            }
        }

        return res

        // Brute force solution
       /*  if(!height.length) return 0

        let res = 0;

        for(let i = 0; i < height.length; i++){
            let leftMax = height[i]
            let rightMax = height[i]

            for(let j = 0; j < i; j++){
                leftMax = Math.max(leftMax, height[j])
            }
            
            for(let j = i + 1; j < height.length; j++){
                rightMax = Math.max(rightMax, height[j])
            }

            res += Math.min(leftMax, rightMax) - height[i]
        }
        return res; */
    }
}
