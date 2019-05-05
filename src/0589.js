/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const x = [];
    const queue = [ root, ];
    while(queue.length > 0) {
        const node = queue.pop();
        if(node === null) {
            continue;
        }
        x.push(node);
        const k = node.children.reverse();
        for(const c of k) {
            queue.push(c);
        }
    }
    return x.map(e => e.val);
};
