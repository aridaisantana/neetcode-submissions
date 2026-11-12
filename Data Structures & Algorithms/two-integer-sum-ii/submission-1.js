class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const neededNumbers = new Map();

        for (let i = 0; i < numbers.length++; i++) {
            if (neededNumbers.has(numbers[i])) {
                if (neededNumbers.get(numbers[i]) < i) {
                    return [neededNumbers.get(numbers[i]) + 1, i + 1];
                }
            }

            const need = target - numbers[i];
            neededNumbers.set(need, i);
        }
    }
}
