/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root === null) {
        return true;
    }

    const fn = (x) => {
        if(x === null) {
            return 0;
        }

        const p = fn(x.left);
        if(p === -1) {
            return -1;
        }
        const q = fn(x.right);
        if(q === -1) {
            return -1;
        }

        // console.log(p, q);

        const r = Math.abs(p - q);
        if(r <= 1) {
            return Math.max(p, q) + 1;
        }
        return -1;

    };
    return fn(root) !== -1;
};
