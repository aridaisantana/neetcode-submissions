class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const map = new Map();
        for (const task of tasks) {
            map.set(task, (map.get(task) || 0) + 1);
        }

        const maxHeap = new MaxPriorityQueue();
        for (const value of map.values()) {
            maxHeap.enqueue(value);
        }

        const queue = new Queue();
        let time = 0;

        while (maxHeap.size() > 0 || queue.size() > 0) {
            time++;

            if (maxHeap.size() > 0) {
                let count = maxHeap.pop() - 1;
                if (count) {
                    queue.push([count, time + n]);
                }
            }

            if (queue.size() > 0 && queue.front()[1] === time) {
                maxHeap.enqueue(queue.dequeue()[0]);
            }
        }
        return time;
    }
}
