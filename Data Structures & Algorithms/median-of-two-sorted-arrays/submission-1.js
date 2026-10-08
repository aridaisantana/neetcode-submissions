class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1,
            B = nums2;
        let total = nums1.length + nums2.length;
        let half = Math.floor(total / 2);

        if (B.length < A.length) {
            [A, B] = [B, A];
        }

        let l = 0,
            r = A.length - 1;

        while (true) {
            let midA = Math.floor((l + r) / 2);
            let midB = half - midA - 2;

            let Aleft = midA >= 0 ? A[midA] : Number.MIN_SAFE_INTEGER;
            let Aright = midA + 1 < A.length ? A[midA + 1] : Number.MAX_SAFE_INTEGER;
            let Bleft = midB >= 0 ? B[midB] : Number.MIN_SAFE_INTEGER;
            let Bright = midB + 1 < B.length ? B[midB + 1] : Number.MAX_SAFE_INTEGER;

            if (Aleft <= Bright && Bleft <= Aright) {
                if (total % 2 !== 0) {
                    return Math.min(Aright, Bright);
                }
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
            } else if (Aleft > Bright) {
                r = midA - 1;
            } else {
                l = midA + 1;
            }
        }
    }
}
