class TrieNode {
    constructor() {
        this.children = new Map();
        this.word = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root
        for(const c of word){
            if(!node.children.has(c)){
                node.children.set(c, new TrieNode())
            }
            node = node.children.get(c)
        }
        node.word = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root
        for(const c of word){
            if(!node.children.has(c)){
                return false
            }
            node = node.children.get(c)
        }
        return node.word
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root
        for(const c of prefix){
            if(!node.children.has(c)){
                return false
            }
            node = node.children.get(c)
        }
        return true
    }
}
