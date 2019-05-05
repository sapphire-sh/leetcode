/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function traverse(node, depth) {
    if(node === null) {
        return depth;
    }
    const x = traverse(node.left, depth);
    const y = traverse(node.right, depth);
    return Math.max(x, y) + 1;
}
var maxDepth = function(root) {
    return traverse(root, 0);
};
