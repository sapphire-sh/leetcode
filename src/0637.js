/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function traverse(node, level, x) {
    if(node === null) {
        return x;
    }
    if(x[level] === undefined) {
        x[level] = [];
    }
    x[level].push(node.val);
    traverse(node.left, level + 1, x);
    traverse(node.right, level + 1, x);
    return x;
}
var averageOfLevels = function(root) {
    const x = traverse(root, 0, []);
    return x.map((e) => {
        return e.reduce((a, b) => a + b, 0) / e.length;
    });
};
