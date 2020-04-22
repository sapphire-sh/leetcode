/**
 * Initialize your data structure here.
 */
var TrieNode = function(val) {
    this.val = val;
    this.children = [];

    this.has = (val) => {
        const x = this.children.find(x => x.val === val);
        return x || null;
    };
    this.add = (val) => {
        const a = this.has(val);
        if(a !== null) { return a; }
        const node = new TrieNode(val);
        this.children.push(node);
        return node;
    };
};
var Trie = function() {
    this.root = new TrieNode(null);
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let a = this.root;
    for(const c of word) {
        a = a.add(c);
    }
    a.add(null);
};

Trie.prototype.internalSearch = function(word) {
    let a = this.root;
    for(const c of word) {
        a = a.has(c);
        if(a === null) {
            return null;
        }
    }
    return a;
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const a = this.internalSearch(word);
    if(a === null) { return false; }
    return a.has(null) !== null;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const a = this.internalSearch(prefix);
    return a !== null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
