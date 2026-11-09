class Solution {
    /**
     * @param {string} senate
     * @return {string}
     */

    predictPartyVictory(senate) {
        const r = [],
            d = [];
        const n = senate.length

        for (let i = 0; i < senate.length; i++) {
            if (senate[i] === "R") r.push(i);
            if (senate[i] === "D") d.push(i);
        }


        while(r.length > 0 && d.length > 0){
            const rTurn = r.shift()
            const dTurn = d.shift()

            if(rTurn < dTurn){
                r.push(rTurn + n)
            }else{
                d.push(dTurn + n)
            }
        }
        return r.length > 0 ? "Radiant" : "Dire"
    }
}
