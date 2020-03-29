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
var diameterOfBinaryTree = function(root) {
    function search(node) {
        if(node === null) { return -1; }
        const a = search(node.left) + 1;
        const b = search(node.right) + 1;
        return Math.max(a, b);
    }
    function calc(node) {
        if(node === null) { return 0; }
        if(node.left === null && node.right === null) {
            return 0;
        }
        const a = search(node.left) + search(node.right) + 2;
        const b = calc(node.left);
        const c = calc(node.right);
        return Math.max(a, b, c);
    }
    return calc(root);
};
