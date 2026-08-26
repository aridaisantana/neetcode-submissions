class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        keyAndWords = {}
        for anagram in strs:
            canonicalRepresentation = [0] * 26
            for character in anagram:
                canonicalRepresentation[ord(character) - ord('a')] += 1
            
            key = "#".join(map(str, canonicalRepresentation))

            if key in keyAndWords:
                keyAndWords[key].append(anagram)
            else:
                keyAndWords[key] = [anagram]
            
        return list(keyAndWords.values())
        
        
            
