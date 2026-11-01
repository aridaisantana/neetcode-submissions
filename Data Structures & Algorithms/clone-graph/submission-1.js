/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const oldToNew = new Map();
        const queue = [];
        oldToNew.set(node, new Node(node.val));
        queue.push(node);

        while (queue.length) {
            const cur = queue.shift();
            for (const child of cur.neighbors) {
                if (!oldToNew.has(child)) {
                    oldToNew.set(child, new Node(child.val));
                    queue.push(child);
                }
                oldToNew.get(cur).neighbors.push(oldToNew.get(child))
            }
        }

        return oldToNew.get(node);
    }
}
