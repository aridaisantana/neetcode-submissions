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
     * @return {TreeNode}
     */
    invertTree(root) {
        const dummy = root;

        const invert = (root) => {
            if(!root) return
            const tmp = root.left;
            root.left = root.right;
            root.right = tmp;

            invert(root.left);
            invert(root.right);
        };

        invert(dummy)
        return dummy
    }
}
