/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let p = null;
    let c = head;
    while(c !== null) {
        const t = c.next;
        c.next = p;
        p = c;
        c = t;
    }
    return p;
};
