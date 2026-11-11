
class Solution {
    countCompleteComponents(n, edges) {
        const adjList = new Map();

        for (let i = 0; i < n; i++) {
            adjList.set(i, []);
        }

        for (const [a, b] of edges) {
            adjList.get(a).push(b);
            adjList.get(b).push(a);
        }

        const visited = new Set();
        let result = 0;

        const dfs = (v, res) => {
            if (visited.has(v)) {
                return;
            }

            visited.add(v);
            res.push(v);

            const neighbors = adjList.get(v);
            for (const neighbour of neighbors) {
                dfs(neighbour, res);
            }

            return res;
        };

        for (let i = 0; i < n; i++) {
            if (visited.has(i)) continue;

            const component = dfs(i, []);

            let flag = true;

            for (let j = 0; j < component.length; j++) {
                const node = component[j];

                if (component.length - 1 !== adjList.get(node).length) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                result++;
            }
        }

        return result;
    }
}
