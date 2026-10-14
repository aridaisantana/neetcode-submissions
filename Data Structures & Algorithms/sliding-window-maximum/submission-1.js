class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const output = []
        let l = 0, r = 0
        const q = new Deque()
        
        while(r < nums.length){
            while(q.size() && nums[q.back()] < nums[r]){
                q.popBack()
            }
            q.pushBack(r)

            if(l > q.front()){
                q.popFront()
            }

            if(r + 1 >= k){
                output[l] = nums[q.front(0)]
                l++
            }
            r++
        }
        return output
    }
}
