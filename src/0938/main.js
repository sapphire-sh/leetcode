/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

function traverse(node, L, R) {
    let sum = 0;
    if(L <= node.val && node.val <= R) {
        sum += node.val;
    }
    if(node.left !== null) {
        sum += traverse(node.left, L, R);
    }
    if(node.right !== null) {
        sum += traverse(node.right, L, R);
    }
    return sum;
}
var rangeSumBST = function(root, L, R) {
    return traverse(root, L, R);
};
