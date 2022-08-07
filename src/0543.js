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
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    const getHeight = root => {
        if(root === null) {
            return 0;
        }
        const p = getHeight(root.left);
        const q = getHeight(root.right);
        return Math.max(p, q) + 1;
    };

    if(root === null) {
        return 0;
    }

    const p = diameterOfBinaryTree(root.left);
    const q = diameterOfBinaryTree(root.right);

    const a = getHeight(root.left);
    const b = getHeight(root.right);

    const r = a + b;

    // console.log(p, q, a, b, r);

    return Math.max(p, q, r);
};
