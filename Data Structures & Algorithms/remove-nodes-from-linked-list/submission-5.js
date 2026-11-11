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
        const reverse = (head) => {
            let curr = head;
            let prev = null;

            while (curr) {
                let temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }
            return prev;
        };

        head = reverse(head);

        let curr = head;
        let currMax = curr.val;
        while (curr.next) {
            if (curr.next.val < currMax) {
                curr.next = curr.next.next;
            } else {
                currMax = curr.next.val
                curr = curr.next
            }
        }

        return reverse(head);
    }
}
