class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length,
            COLS = grid[0].length;

        const visit = new Set();
        const queue = new Queue();

        const addDistance = (r, c) => {
            if(r < 0 || r === ROWS || c < 0 || c == COLS || visit.has(`${r},${c}`) || grid[r][c] === -1){
                return
            }
            visit.add(`${r},${c}`)
            queue.push([r,c])
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                    visit.add(`${r},${c}`);
                }
            }
        }

        let distance = 0
        while(!queue.isEmpty()){
            const size = queue.size()
            for(let i = 0; i < size; i++){
                const [r, c] = queue.pop()
                grid[r][c] = distance

                addDistance(r + 1, c)
                addDistance(r - 1, c)
                addDistance(r, c + 1)
                addDistance(r, c - 1)
            }
            distance++ 
        }
    }
}
