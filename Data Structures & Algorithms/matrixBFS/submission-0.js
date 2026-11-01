class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        let path = 0;
        const ROWS = grid.length,
            COLS = grid[0].length;
        const queue = [];
        const visited = new Set();
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
        queue.push([0, 0]);
        visited.add(`${0},${0}`);

        if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] === 1) {
            return -1;
        }

        while (queue.length) {
            const level = queue.length;

            for (let i = 0; i < level; i++) {
                const [r, c] = queue.shift();
                if (r === ROWS - 1 && c === COLS - 1) return path;

                for (const [rowDir, colDir] of directions) {
                    const row = r + rowDir;
                    const col = c + colDir;

                    if (
                        row < 0 ||
                        col < 0 ||
                        row >= ROWS ||
                        col >= COLS ||
                        grid[row][col] === 1 ||
                        visited.has(`${row},${col}`)
                    ) {
                        continue;
                    }

                    visited.add(`${row},${col}`);
                    queue.push([row, col]);
                }
            }
            path++;
        }
        return -1;
    }
}
