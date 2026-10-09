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
       let node = head
       let length = 0;
       while(node){
        node = node.next
        length++
       }

       if(length === n){
        return head.next
       }

       node = head

       for(let i = 0; i < length - 1 - n; i++){
            node = node.next
       }
       node.next = node.next.next
       return head
    }
}
