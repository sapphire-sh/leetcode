/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) {
        return [];
    }
    const x = [];
    let a = [ root, ];
    while(a.length > 0) {
        const b = [];
        const c = [];
        while(a.length > 0) {
            const x = a.shift();
            c.push(x.val);
            b.push(...x.children);
        }
        a = b;
        x.push(c);
    }
    return x;
};
