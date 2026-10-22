class TrieNode {
    constructor() {
        this.children = new Map();
        this.word = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;
        for (const c of word) {
            if (!node.children.has(c)) {
                node.children.set(c, new TrieNode());
            }
            node = node.children.get(c);
        }
        node.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (word, j, root) => {
            for (let i = j; i < word.length; i++) {
                const c = word[i];
                if (c === ".") {
                    for (const child of root.children.values()) {
                        if (child !== null && dfs(word, i + 1, child)) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    if (!root.children.has(c)) {
                        return false;
                    }
                    root = root.children.get(c);
                }
            }
            return root.word;
        };

        return dfs(word, 0, this.root);
    }
}
