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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const stack1 = [],
            stack2 = [];

        let node1 = l1;
        while (node1) {
            stack1.push(node1.val);
            node1 = node1.next;
        }

        let node2 = l2;
        while (node2) {
            stack2.push(node2.val);
            node2 = node2.next;
        }

        let firstNumber = "";
        while (stack1.length > 0) {
            firstNumber = firstNumber + stack1.pop();
        }
        let secondNumber = "";
        while (stack2.length > 0) {
            secondNumber = secondNumber + stack2.pop();
        }

        const sum = BigInt(firstNumber) + BigInt(secondNumber);
        const arrayOfNumbers = sum.toString().split("").map(Number);
        let head = new ListNode(0);
        let node = head;
        for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
            node.next = new ListNode(arrayOfNumbers[i]);
            node = node.next;
        }
        return head.next;
    }
}
