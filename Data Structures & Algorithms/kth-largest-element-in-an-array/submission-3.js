class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minHeap = new MaxPriorityQueue()
        for(const num of nums){
            minHeap.enqueue(num)
        }
        
        for(let i = 1; i < k; i++){
            minHeap.pop()
        }

        return minHeap.pop()
    }
}
