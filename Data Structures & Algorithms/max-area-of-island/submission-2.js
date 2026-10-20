class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if (grid.length === 0) return 0;

        let maxArea = 0;
        const visit = new Set();
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        const bfs = (r, c) => {
            const queue = new Queue();
            queue.push([r, c]);
            visit.add(`${r},${c}`);
            let res = 1;

            while (!queue.isEmpty()) {
                const [row, column] = queue.pop();
                for (const [dr, dc] of directions) {
                    let rowDr = dr + row,
                        columnDr = dc + column;
                    if (
                        rowDr >= 0 &&
                        rowDr < ROWS &&
                        columnDr >= 0 &&
                        columnDr < COLS &&
                        !visit.has(`${rowDr},${columnDr}`) &&
                        grid[rowDr][columnDr] === 1
                    ) {
                        visit.add(`${rowDr},${columnDr}`);
                        queue.push([rowDr, columnDr]);
                        res++;
                    }
                }
            }
            return res;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1 && !visit.has(`${r},${c}`)) {
                    maxArea = Math.max(maxArea, bfs(r, c));
                }
            }
        }

        return maxArea;
    }
}
