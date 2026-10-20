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
      /*   const dfs = (node) => {
            if (!node) return null;

            if (visited.has(node)) {
                return visited.get(node);
            }

            const copy = new Node(node.val);
            visited.set(node, copy);

            for (const neighbor of node.neighbors) {
                copy.neighbors.push(dfs(neighbor));
            }

            return copy;
        }; */

        if(!node) return null

        const oldToNew = new Map()
        const queue = new Queue()
        oldToNew.set(node, new Node(node.val))
        queue.push(node)

        while(!queue.isEmpty()){
            const current = queue.pop()
            for(const neighbor of current.neighbors){
                if(!oldToNew.has(neighbor)){
                    oldToNew.set(neighbor, new Node(neighbor.val))
                    queue.push(neighbor)
                }
                oldToNew.get(current).neighbors.push(oldToNew.get(neighbor))
            }
        }
        return oldToNew.get(node)
    }
}
