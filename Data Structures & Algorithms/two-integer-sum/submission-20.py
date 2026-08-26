class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        wantedNumbers = {}

        for i, num in enumerate(nums):
            wantedNumber = target - num
            if wantedNumber in wantedNumbers:
                return [wantedNumbers[wantedNumber], i]
            
            wantedNumbers[num] = i
        
        return []