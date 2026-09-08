class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        setOfNumbers = set(nums)
        longest = 0

        for n in setOfNumbers:
            if n - 1 not in setOfNumbers:
                length = 0
                while n + length in setOfNumbers:
                    length += 1
                longest = max(longest, length)
        return longest
