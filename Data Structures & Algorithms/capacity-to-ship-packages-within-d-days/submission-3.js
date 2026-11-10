class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        // Tenemos capacidades y barcos

        let maxCapacity = Math.max(...weights);

        while (true) {
            let ships = 1;
            let capacity = maxCapacity

            for(const w of weights){
                if(w > capacity){
                    capacity = maxCapacity
                    ships++
                }
                capacity = capacity - w
            }

            if(ships <= days){
                return maxCapacity
            }

            maxCapacity++
        }
    }
}
