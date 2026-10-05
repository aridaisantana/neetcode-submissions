class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            let temperature = temperatures[i];

            while (stack.length > 0 && temperature > stack[stack.length - 1][0]) {
                const [stackTemperature, stackIndex] = stack.pop();
                result[stackIndex] = i - stackIndex;
            }
            stack.push([temperature, i]);
        }
        return result;
    }
}
