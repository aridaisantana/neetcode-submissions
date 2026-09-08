
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = defaultdict(int)

        for a, b in zip(s, t):
            count[a] += 1
            count[b] -= 1
        
        return all(value == 0 for value in count.values())

       
