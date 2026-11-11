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

        const dummy = new ListNode(0, null);
        node = dummy

        for (const val of stack) {
            node.next = new ListNode(val, null);
            node = node.next;
        }

        return dummy.next;
    }
}
