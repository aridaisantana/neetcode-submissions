class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map()

        for(let i = 0; i < nums.length; i++){
            frequencyMap.set(nums[i], (frequencyMap.get(nums[i]) || 0) + 1)
        }

        const minHeap = new MinPriorityQueue((x) => x[1])

        for (const [number, frequency] of frequencyMap.entries()){
            minHeap.enqueue([number,frequency])
            
            if(minHeap.size() > k){
                minHeap.dequeue()
            }
        }

        let result = []
        for(let i = 0; i < k ; i++){
            result.push(minHeap.dequeue()[0])
        }

        return result
    }
}
