class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length,
            COLS = heights[0].length;
        const pac = new Set(),
            atl = new Set();

        const dfs = (r, c, visit, prevHeight) => {
            if (
                visit.has(`${r},${c}`) ||
                r < 0 ||
                c < 0 ||
                r === ROWS ||
                c === COLS ||
                heights[r][c] < prevHeight
            ) {
                return;
            }

            visit.add(`${r},${c}`);
            dfs(r - 1, c, visit, heights[r][c]);
            dfs(r + 1, c, visit, heights[r][c]);
            dfs(r, c + 1, visit, heights[r][c]);
            dfs(r, c - 1, visit, heights[r][c]);
        };

        for (let column = 0; column < COLS; column++) {
            dfs(0, column, pac, heights[0][column]);
            dfs(ROWS - 1, column, atl, heights[ROWS - 1][column]);
        }

        for (let row = 0; row < ROWS; row++) {
            dfs(row, 0, pac, heights[row][0]);
            dfs(row, COLS - 1, atl, heights[row][COLS - 1]);
        }

        const res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pac.has(`${r},${c}`) && atl.has(`${r},${c}`)) {
                    res.push([r, c]);
                }
            }
        }
        return res;
    }
}
