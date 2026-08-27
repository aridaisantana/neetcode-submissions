class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        seen = {}
        frequencyBuckets = [None] * (len(nums) + 1)
        for num in nums:
            if num in seen:
                seen[num] = seen[num] + 1
            else:
                seen[num] = 1
        
        for number, frequency in seen.items():
            if frequencyBuckets[frequency]:
                frequencyBuckets[frequency].append(number)
            else:
                frequencyBuckets[frequency] = [number]
        
        result = []
        for i in range(len(frequencyBuckets) - 1, -1, -1):
            if frequencyBuckets[i]:
                result.extend(frequencyBuckets[i])
                
            if len(result) >= k:
                return result[0:k]