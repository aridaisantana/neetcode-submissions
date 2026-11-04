class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length,
            COLS = board[0].length;
        let curr = "";
        const visited = new Set();

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r === ROWS || c === COLS || visited.has(`${r},${c}`)) {
                return false;
            }

            visited.add(`${r},${c}`);
            curr += board[r][c];
            if (curr == word) return true;

            if (dfs(r + 1, c) || dfs(r - 1, c) || dfs(r, c + 1) || dfs(r, c - 1)) return true;

            curr = curr.substring(0, curr.length - 1);
            visited.delete(`${r},${c}`);
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (dfs(r, c)) {
                    return true;
                }
            }
        }

        return false;
    }
}
