/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
function traverse(node) {
    const c = node.children;
    if(c.length === 0) {
        return 1;
    }
    const x = c.map((e) => {
        return traverse(e) + 1;
    });
    return Math.max(...x);
}

var maxDepth = function(root) {
    if(root === null) {
        return 0;
    }
    return traverse(root);
};
