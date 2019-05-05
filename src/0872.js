/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leaf(node, x) {
    if(node === null) {
        return;
    }
    if(node.left === null && node.right === null) {
        x.push(node.val);
        return;
    }
    leaf(node.left, x);
    leaf(node.right, x);
}
var leafSimilar = function(root1, root2) {
    const x1 = [];
    const x2 = [];
    leaf(root1, x1);
    leaf(root2, x2);
    return x1.join(' ') === x2.join(' ');
};
