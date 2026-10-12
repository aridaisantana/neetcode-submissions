class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        /*  const seen = new Set()
        for(const num of nums){
            if(seen.has(num)) return num
            seen.add(num)
        } */

        // aplicar slow, fast para buscar la primera intersección
        // luego aplicar slow, slow para buscar la segunda intersección
        // debido a una explicación matematica, obtendre el duplicado

        let slow = 0, fast = 0

        while(true){
            slow = nums[slow]
            fast = nums[nums[fast]]

            if(slow === fast) break
        }

        let slow2 = 0
        while(true){
            slow = nums[slow]
            slow2 = nums[slow2]

            if(slow === slow2) return slow
        }
    }
}
