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
    diameterOfBinaryTree(root) {
        let result = 0;

        const dfs = (curr) => {
            if(!curr) return 0

            const left = dfs(curr.left)
            const right = dfs(curr.right)
            result = Math.max(result, left + right)
            return 1 + Math.max(left, right)
        }
        dfs(root)
        return result
       /*  const stack = [root]
        let map = new Map()
        map.set(null, [0,0])

        while(stack.length > 0){
            let node = stack[stack.length - 1]
            console.log(node)

            if(node.left && !map.has(node.left)){
                stack.push(node.left)
            }else if(node.right && !map.has(node.right)){
                stack.push(node.right)
            } else{
                node = stack.pop()

                let [leftHeight, leftDiameter] = map.get(node.left)
                let [rightHeight, rightDiameter] = map.get(node.right)

                let height = 1 + Math.max(leftHeight, rightHeight)
                let diameter = Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter))

                map.set(node, [height, diameter])
            }
        }
        return map.get(root)[1] */
    }
}
