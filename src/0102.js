/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const x = [];
    function traversal(node, depth) {
        if(node === null) { return; }
        if(x[depth] === undefined) {
            x[depth] = [node.val];
        }
        else {
            x[depth].push(node.val);
        }
        traversal(node.left, depth + 1);
        traversal(node.right, depth + 1);
    }
    traversal(root, 0);
    return x;
};
