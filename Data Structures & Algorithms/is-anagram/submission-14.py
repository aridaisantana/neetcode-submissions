
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = defaultdict(int)

        for a in s:
            count[a] += 1
        
        for b in t:
            count[b] -= 1
        
        for value in count.values():
            if value != 0:
                return False

        return True
