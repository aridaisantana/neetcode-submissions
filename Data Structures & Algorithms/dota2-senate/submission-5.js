class Solution {
    /**
     * @param {string} senate
     * @return {string}
     */
    predictPartyVictory(senate) {
        const R = [], D = []

        for(let i = 0; i < senate.length; i++){
            if(senate[i] === "R") R.push(i)
            if(senate[i] === "D") D.push(i)
        }

        const round = senate.length

        while(R.length > 0 && D.length > 0){
            const radiantSenatorTurn = R.shift()
            const direSenatorTurn = D.shift()

            if(radiantSenatorTurn < direSenatorTurn){
                R.push(radiantSenatorTurn + round)
            }else{
                D.push(direSenatorTurn + round)
            }
        }

        return R.length > 0 ? "Radiant" : "Dire"
    }
}
