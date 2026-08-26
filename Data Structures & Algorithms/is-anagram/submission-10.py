class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        firstDict = {}
        secondDict = {}

        for firstCharacter, secondCharacter in zip(s, t):
            if not firstCharacter in firstDict:
                firstDict[firstCharacter] = 1
            else:
                firstDict[firstCharacter] = firstDict[firstCharacter] + 1
            
            if not secondCharacter in secondDict:
                secondDict[secondCharacter] = 1
            else:
                secondDict[secondCharacter] = secondDict[secondCharacter] + 1
        
        for key, value in firstDict.items():
            if value != secondDict.get(key):
                return False
        
        return True
