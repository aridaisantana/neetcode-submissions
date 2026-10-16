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
     * @return {number}
     */
    maxPathSum(root) {
        const dfs = (node, result) => {
            if(!node) return 0

            let leftMax = Math.max(dfs(node.left, result), 0)
            let rightMax = Math.max(dfs(node.right, result), 0)

            result[0] = Math.max(result[0], node.val + leftMax + rightMax)
            return node.val + Math.max(leftMax, rightMax)
        }

        const result = [root.val]
        dfs(root, result)
        return result[0];

    }
}
