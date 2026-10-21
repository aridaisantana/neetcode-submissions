class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length,
            COLS = grid[0].length;

        const queue = new Queue();
        const rottenFruits = new Set();
        let freshFruits = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                    rottenFruits.add(`${r},${c}`);
                } else if (grid[r][c] === 1) {
                    freshFruits++;
                }
            }
        }

        const convertToRotten = (r, c) => {
            if (
                r < 0 ||
                r === ROWS ||
                c < 0 ||
                c == COLS ||
                rottenFruits.has(`${r},${c}`) ||
                grid[r][c] !== 1
            ) {
                return;
            }

            rottenFruits.add(`${r},${c}`);
            freshFruits--
            queue.push([r, c]);
        };

        let minutes = 0;
        while (!queue.isEmpty() && freshFruits > 0) {
            let size = queue.size();
            for (let i = 0; i < size; i++) {
                const [row, col] = queue.pop();

                convertToRotten(row + 1, col);
                convertToRotten(row - 1, col);
                convertToRotten(row, col + 1);
                convertToRotten(row, col - 1);
            }
            
           minutes++;
        }

        console.log(rottenFruits, minutes, freshFruits);

        return freshFruits === 0 ? minutes : -1;
    }
}
