class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const visited = new Set();
        let numberOfPaths = 0;
        const ROWS = grid.length,
            COLS = grid[0].length;

        const dfs = (r, c) => {
            if (
                r < 0 ||
                c < 0 ||
                r === ROWS ||
                c === COLS ||
                grid[r][c] === 1 ||
                visited.has(`${r},${c}`)
            ) {
                return;
            }

            if (r === ROWS - 1 && c === COLS - 1) {
                numberOfPaths++;
                return;
            }

            visited.add(`${r},${c}`);

            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);

            visited.delete(`${r},${c}`);
        };

        dfs(0,0)
        return numberOfPaths;
    }
}
