class Solution:

    def encode(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ""
        sizes = []
        for element in strs:
            sizes.append(len(element))
        encodedString = ",".join(map(str, sizes)) + "#" + "".join(strs)
        return encodedString

    def decode(self, s: str) -> List[str]:
        if not s:
            return []
        decodedSizes = (s[:s.index("#")]).split(",")
        decodedResult = []
        currentIndex = s.index("#") + 1
        for size in decodedSizes:
            size = int(size)
            decodedResult.append(s[currentIndex:currentIndex + size])
            currentIndex = currentIndex + size
        return decodedResult
