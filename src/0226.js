/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invert(node) {
    if(node === null) {
        return node;
    }
    const t = node.left;
    node.left = node.right;
    node.right = t;
    invert(node.left);
    invert(node.right);
    return node;
}
var invertTree = function(root) {
    return invert(root);
};
