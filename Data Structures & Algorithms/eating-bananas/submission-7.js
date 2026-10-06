class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1,
            r = Math.max(...piles)
        let minK = r

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            let hours = 0;
            for(let i = 0; i < piles.length; i++){
                hours += Math.ceil(piles[i] / mid)
            }
            if(hours <= h){
                minK = mid
                r = mid - 1
            }else{
                l = mid + 1
            }
        }
        return minK
    }
}
