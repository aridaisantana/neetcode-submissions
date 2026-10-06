class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a, b) => a - b);
        let l = 1,
            r = piles[piles.length - 1];
        let minK = piles[piles.length - 1]

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
