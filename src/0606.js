/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    function traverse(node) {
        if(node === null) {
            return '';
        }
        let x = `${node.val}`;
        if(node.left !== null) {
            x += `(${traverse(node.left)})`;
        }
        if(node.right !== null) {
            if(node.left === null) {
                x += '()';
            }
            x += `(${traverse(node.right)})`;
        }
        return x;
    }
    return traverse(t);
};
