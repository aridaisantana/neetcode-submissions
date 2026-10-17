class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue()
        for(const stone of stones){
            maxHeap.enqueue(stone)
        }

        while(maxHeap.size() > 1){
                let stone1 = maxHeap.dequeue()
                let stone2 = maxHeap.dequeue()
                if(stone1 !== stone2){
                    const newStone = Math.abs(stone1 - stone2)
                    maxHeap.enqueue(newStone)
                }
        }
        return maxHeap.front() || 0
    }
}
