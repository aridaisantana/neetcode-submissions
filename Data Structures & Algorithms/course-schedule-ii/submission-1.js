class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let prereq = Array.from({ length: numCourses }, () => []);

        for (let [course, prerequisite] of prerequisites) {
            prereq[course].push(prerequisite);
        }

        let output = [];
        const visit = new Set(),
            cycle = new Set();

        const dfs = (course) => {
            if (cycle.has(course)) return false;
            if (visit.has(course)) return true;

            cycle.add(course);

            for (const prerequisite of prereq[course]) {
                if (dfs(prerequisite) === false) return false;
            }
            cycle.delete(course);
            visit.add(course);
            output.push(course);
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (dfs(i) === false) return [];
        }

        return output;
    }
}
