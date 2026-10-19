
class Solution {
    numIslands(grid) {
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        let islands = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visit = new Set();

        const dfs = (r, c) => {
            if (
                r < 0 || c < 0 ||
                r >= ROWS || c >= COLS ||
                grid[r][c] === "0" ||
                visit.has(`${r},${c}`)
            ) {
                return;
            }

            visit.add(`${r},${c}`);

            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (
                    grid[r][c] === "1" &&
                    !visit.has(`${r},${c}`)
                ) {
                    dfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}
