class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const dp = new Map();

        const dfs = (i, buying) => {
            if (i >= prices.length) {
                return 0;
            }

            const key = `${i}-${buying}`;

            if (dp.has(key)) return dp.get(key);

            if (buying) {
                let buy = dfs(i + 1, false) - prices[i];
                let cooldown = dfs(i + 1, true);

                dp.set(key, Math.max(buy, cooldown));
            } else {
                let sell = dfs(i + 2, true) + prices[i];
                let cooldown = dfs(i + 1, false);

                dp.set(key, Math.max(sell, cooldown));
            }

            return dp.get(key)
        };

        return dfs(0, true);
    }
}
