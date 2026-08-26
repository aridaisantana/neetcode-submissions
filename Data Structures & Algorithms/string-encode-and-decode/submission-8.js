class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";
        let sizes = new Array(strs.length).fill(0);
        for (let i = 0; i < strs.length; i++) {
            sizes[i] = strs[i].length;
        }
        let encodedString = sizes.join(",") + "#" + strs.join("");
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") return [];
        let sizes = "";
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == "#") break;
            sizes = sizes + str.charAt(i);
        }
        console.log("str", str)
        let sizesArray = sizes.split(",");
        console.log("sizes", sizesArray)
        let result = [];
        let currentIndex = str.indexOf("#") + 1;
        console.log("currentIndex", currentIndex)
        for (let i = 0; i < sizesArray.length; i++) {
            result.push(str.substring(currentIndex, currentIndex + Number(sizesArray[i])));
            currentIndex = currentIndex + Number(sizesArray[i]);
        }
        return result;
    }
}
