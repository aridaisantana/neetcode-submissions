class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let alphanumericalText = s.replace(/[^a-zA-Z0-9]/g, "")
        let reversed = Array.from(alphanumericalText).reverse().join("")
        console.log(reversed)
        for ( let i = 0; i < alphanumericalText.length; i++){
            if(alphanumericalText.charAt(i).toLowerCase() !== reversed.charAt(i).toLowerCase()) return false
        }
        return true

    }
}
