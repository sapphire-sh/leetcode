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
var sumRootToLeaf = function(root) {
    function traverse(node, num) {
        num = num * 2 + node.val;
        if(node.left === null && node.right === null) {
            return num;
        }
        let sum = 0;
        if(node.left !== null) {
            sum += traverse(node.left, num);
        }
        if(node.right !== null) {
            sum += traverse(node.right, num);
        }
        return sum;
    }
    if(root === null) {
        return 0;
    }
    return traverse(root, 0);
};
