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

            for (let i = 0; i < weights.length; i++) {
                if (capacity - weights[i] < 0) {
                    capacity = maxCapacity;
                    ships++;
                }
                capacity = capacity - weights[i]
            }

            if(ships <= days){
                return maxCapacity
            }

            maxCapacity++
        }
    }
}
