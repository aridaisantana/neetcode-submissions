class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        /*  for(let i = 0; i < matrix.length; i ++){
            for(let j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] === target){
                    return true
                }
            }
        }
        return false */
        const ROWS = matrix.length,
            COLS = matrix[0].length;
        let top = 0,
            bot = ROWS - 1;
        while (top <= bot) {
            let midRow = Math.floor((top + bot) / 2);
            if (target > matrix[midRow][COLS - 1]) {
                top = midRow + 1;
            } else if (target < matrix[midRow][0]) {
                bot = midRow - 1;
            } else {
                break;
            }
        }

        if (!(top <= bot)) return false;
        let midRow = Math.floor((top + bot) / 2);
        let l = 0,
            r = COLS - 1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (target > matrix[midRow][mid]) {
                l = mid + 1;
            } else if (target < matrix[midRow][mid]) {
                r = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
