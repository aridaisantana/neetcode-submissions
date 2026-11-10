class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights)
        let r = weights.reduce((a, b) => a + b, 0)
        let result = r

        const canShip = (cap) => {
            let ships = 1
            let capacity = cap

            for(const w of weights){
                if(w > capacity){
                    capacity = cap
                    ships++
                }
                capacity = capacity - w
            }

            if(ships <= days){
                return true
            }

            return false
        }

        while(l <= r){
            const cap = Math.floor((l + r) / 2)
            if(canShip(cap)){
                result = Math.min(result, cap)
                r = cap - 1
            }else{
                l = cap + 1
            }
        }
        return result
    }
}
