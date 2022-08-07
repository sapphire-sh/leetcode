/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(head === null) {
        return null;
    }
    const p = [];
    {
        let curr = head;
        while(curr !== null) {
            p.push(curr);
            curr = curr.next;
        }
    }
    {
        p.sort((a, b) => a.val - b.val);
        const head = p.shift();
        let curr = head;
        while(p.length > 0) {
            const q = p.shift();
            curr.next = q;
            curr = q;
        }
        curr.next = null;
        return head;
    }
};
