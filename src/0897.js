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
function traverse(node, x) {
    if(node === null) {
        return;
    }
    traverse(node.left, x);
    x.push(node.val);
    traverse(node.right, x);
}
var increasingBST = function(root) {
    let x = [];
    traverse(root, x);
    const a = new TreeNode(-1);
    let curr = a;
    for(const s of x) {
        curr.right = new TreeNode(s);
        curr = curr.right;
    }
    return a.right;
};
