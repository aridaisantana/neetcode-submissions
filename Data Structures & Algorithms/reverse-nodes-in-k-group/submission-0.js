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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let node = dummy;

        while (true) {
            let kth = this.getKthGroup(node, k);
            if(!kth) break;

            let nextGroup = kth.next

            let prev = kth.next
            let current = node.next
            while(current != nextGroup){
                const temp = current.next
                current.next = prev
                prev = current
                current = temp
            }

            const tmp = node.next
            node.next = kth
            node = tmp
        }
        return dummy.next
    }

    getKthGroup(node, k) {
        while (node && k > 0) {
            node = node.next;
            k--;
        }
        return node;
    }
}
