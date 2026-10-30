class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map()
        for(let i = 0; i < numCourses; i++){
            preMap.set(i, [])
        }

        for(const [course, pre] of prerequisites){
            preMap.get(course).push(pre)
        }

        const visited = new Set()

        const dfs = (course) => {
            if(visited.has(course)) return false

            //all prerequisites for this course has been achieved
            if(preMap.has(course) && preMap.get(course).length === 0) return true

            visited.add(course)

            for(let preReq of preMap.get(course)){
                if(!dfs(preReq)) return false
            }

            visited.delete(course)
            preMap.set(course, [])
            return true
        }

        for(let c = 0; c < numCourses; c++){
            if(!dfs(c)) return false
        }

        return true
    }
}
