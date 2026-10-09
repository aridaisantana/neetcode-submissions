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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        let node = dummy;
        let rightPointer = head;

        for (let i = 0; i < n; i++) {
            rightPointer = rightPointer.next;
        }

        while (rightPointer) {
            node = node.next;
            rightPointer = rightPointer.next;
        }

        node.next = node.next.next;
        return dummy.next;
    }
}
