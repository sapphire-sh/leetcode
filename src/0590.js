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
var postorder = function(root) {
    const x = [];
    const queue = [ root, ];
    while(queue.length > 0) {
        const node = queue.pop();
        if(node === null) {
            continue;
        }
        x.push(node);
        for(const c of node.children) {
            queue.push(c);
        }
    }
    return x.reverse().map(e => e.val);
};
