/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    removeNodes(head) {
        let node = head;
        const stack = [node.val];
        node = node.next;

        while (node) {
            while (stack[stack.length - 1] < node.val) {
                stack.pop();
            }

            stack.push(node.val);
            node = node.next;
        }

        console.log(stack)
        const first = stack.shift();
        let nodeHead = new ListNode(first, null);
        const dummy = new ListNode(0, nodeHead)

        while (stack.length > 0) {
            const element = stack.shift();
            nodeHead.next = new ListNode(element, null);
            nodeHead = nodeHead.next;
        }

        return dummy.next;
    }
}
