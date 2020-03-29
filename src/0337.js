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
var rob = function(root) {
    function calc(node) {
        if(node === null) { return [0,0]; }

        const a = calc(node.left);
        const b = calc(node.right);

        return [
            Math.max(...a) + Math.max(...b),
            a[0] + b[0] + node.val,
        ];
    }

    const x = calc(root);
    return Math.max(...x);
};
