/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0) {
        return null;
    }
    function calc(inorder) {
        if(inorder.length === 0) {
            return null;
        }
        const v = preorder.shift();
        const node = new TreeNode(v);
        const index = inorder.indexOf(v);

        const left = inorder.slice(0, index);
        node.left = calc(left);

        const right = inorder.slice(index + 1, inorder.length);
        node.right = calc(right);

        return node;
    }
    return calc(inorder);
};
