// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let hashMap = new Map()
        hashMap.set(null, null)
        let node = head
        while(node){
            let copy = new Node(node.val)
            hashMap.set(node, copy)
            node = node.next
        }

        node = head
        while(node){
            let copy = hashMap.get(node)
            copy.next = hashMap.get(node.next)
            copy.random = hashMap.get(node.random)
            node = node.next
        }

        return hashMap.get(head)

    }
}
