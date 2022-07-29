/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const fn = (x, t) => {
        if(x === null) {
            t.push(null);
            return;
        }
        t.push(x.val);
        if(x.left === null) {
            t.push(null);
        }
        else {
            fn(x.left, t);
        }
        if(x.right === null) {
            t.push(null);
        }
        else {
            fn(x.right, t);
        }
        return t;
    }
    const r = fn(p, []);
    const s = fn(q, []);
    return JSON.stringify(r) === JSON.stringify(s);
};
