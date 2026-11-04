class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let currSubstring = [];
        let result = [];

        const dfs = (i) => {
            if (i >= s.length) {
                result.push([...currSubstring]);
                return;
            }

            for(let j = i; j < s.length; j++){
                if(this.isPali(s, i, j)){
                    currSubstring.push(s.substring(i, j + 1))
                    dfs(j + 1)
                    currSubstring.pop()
                }
            }
        };

        dfs(0);
        return result;
    }

    isPali(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
