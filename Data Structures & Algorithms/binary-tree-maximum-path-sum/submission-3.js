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
        const res = [root.val]

        const dfs = (node) => {
            if(!node) return 0

            let leftMax = dfs(node.left)
            let rightMax = dfs(node.right)

            // Get rid of negative numbers
            leftMax = Math.max(leftMax, 0)
            rightMax = Math.max(rightMax, 0)

            res[0] = Math.max(res[0], node.val + leftMax + rightMax)
            return node.val + Math.max(leftMax, rightMax)
        }

        dfs(root)
        return res[0];

    }
}
