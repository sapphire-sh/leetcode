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
var inorderTraversal = function(root) {
    // const x = [];
    // if(root === null) { return x; }
    // if(root.left !== null) {
    //     const a = inorderTraversal(root.left);
    //     x.push(...a);
    // }
    // x.push(root.val);
    // if(root.right !== null) {
    //     const a = inorderTraversal(root.right);
    //     x.push(...a);
    // }
    // return x;
    const x = [];
    if(root === null) { return x; }
    const q = [];
    let c = root;
    while(c !== null || q.length > 0) {
        while(c !== null) {
            q.push(c);
            c = c.left;
        }
        c = q.pop();
        x.push(c.val);
        c = c.right;
    }
    return x;
};
