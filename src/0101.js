/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null) { return true; }
    function calc(l, r) {
        if(l === null && r === null) { return true; }
        if(l === null || r === null) { return false; }
        if(l.val === r.val) {
            return calc(l.left, r.right) && calc(l.right, r.left);
        }
        return false;
    }
    return calc(root.left, root.right);
};
