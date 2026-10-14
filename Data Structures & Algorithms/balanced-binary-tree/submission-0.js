/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let result = 0

        const dfs = (current) => {  
            if(!current) return false
            
            const left = dfs(current.left)
            const right = dfs(current.right)

            result = Math.max(result, Math.abs(left - right))
            return 1 + Math.max(left, right)
        }

        dfs(root)
        return result <= 1
    }
}
