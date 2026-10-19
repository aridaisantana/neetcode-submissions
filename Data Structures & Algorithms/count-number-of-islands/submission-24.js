
class Solution {
    numIslands(grid) {
        if (!grid || grid.length === 0) return 0;

        const ROWS = grid.length;
        const COLS = grid[0].length;

        const visit = new Set();
        let islands = 0;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const bfs = (r, c) => {
            const queue = new Queue();

            visit.add(`${r},${c}`);
            queue.enqueue([r, c]);

            while (!queue.isEmpty()) {
                const [row, col] = queue.dequeue();

                for (const [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;

                    if (
                        nr >= 0 &&
                        nr < ROWS &&
                        nc >= 0 &&
                        nc < COLS &&
                        grid[nr][nc] === "1" &&
                        !visit.has(`${nr},${nc}`)
                    ) {
                        queue.enqueue([nr, nc]);
                        visit.add(`${nr},${nc}`);
                    }
                }
            }
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (
                    grid[r][c] === "1" &&
                    !visit.has(`${r},${c}`)
                ) {
                    bfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}
