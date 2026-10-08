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
     * @return {boolean}
     */
    hasCycle(head) {
       /*  const seen = new Set()

        let current = head
        while(current){
            if(seen.has(current)){
                return true;
            }
            seen.add(current)
            current = current.next
        }
        return false */
        let slow = head, fast = head;
        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next

            if(slow === fast) return true
        }
        return false
    }
}
