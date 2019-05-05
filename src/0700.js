/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function search(node, val) {
    if(node === null) {
        return null;
    }
    if(node.val === val) {
        return node;
    }
    const a = search(node.left, val);
    if(a !== null) {
        return a;
    }
    const b = search(node.right, val);
    if(b !== null) {
        return b;
    }
    return null;
}
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    return search(root, val);
};
