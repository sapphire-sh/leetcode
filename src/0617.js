/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
function merge(n1, n2) {
    if(n1 === null) {
        return n2;
    }
    if(n2 === null) {
        return n1;
    }
    const node = new TreeNode(n1.val + n2.val);
    node.left = merge(n1.left, n2.left);
    node.right = merge(n1.right, n2.right);
    return node;
}
var mergeTrees = function(t1, t2) {
    return merge(t1, t2);
};
