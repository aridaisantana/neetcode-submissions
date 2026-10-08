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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const listNode = new ListNode()
        let node = listNode
        
        while(list1 && list2){
            let current1 = list1.val
            let current2 = list2.val

            if(current1 <= current2){
                node.next = list1
                list1 = list1.next
            }else{
                node.next = list2
                list2 = list2.next
            }
            node = node.next
        }

        if(list1){
            node.next = list1
        }else{
            node.next = list2
        }

        return listNode.next
    }
}
