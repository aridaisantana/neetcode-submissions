class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [];
        const postfix = Array(nums.length);

        const result = [];
        for (let i = 0; i < nums.length; i++) {
            i !== 0 ? prefix.push(nums[i] * prefix[i - 1]) : prefix.push(nums[i]);
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            i !== nums.length - 1
                ? (postfix[i] = nums[i] * postfix[i + 1])
                : (postfix[i] = nums[i]);
        }

        console.log(prefix, postfix);

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                result.push(postfix[i + 1]);
                continue;
            }
            if (i === nums.length - 1) {
                result.push(prefix[i - 1]);
                continue;
            }

            result.push(prefix[i - 1] * postfix[i + 1]);
        }
        return result;
    }
}
