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
function check(node, val) {
    if(node.left !== null) {
        const x = check(node.left, node.val);
        if(x === false) {
            return false;
        }
    }
    if(node.right !== null) {
        const x = check(node.right, node.val);
        if(x === false) {
            return false;
        }
    }
    return node.val === val;
}

var isUnivalTree = function(root) {
    return check(root, root.val);
};
