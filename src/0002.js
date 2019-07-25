/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let s = null;
    let a = null;
    while(l1 !== null || l2 !== null) {
        let t = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = t >= 10 ? 1 : 0;
        t %= 10;
        const x = new ListNode(t);
        if(a === null) {
            a = x;
            s = x;
        }
        else {
            a.next = x;
            a = a.next;
        }
        if(l1 !== null) {
            l1 = l1.next;
        }
        if(l2 !== null) {
            l2 = l2.next;
        }
    }
    if(carry === 1) {
        a.next = new ListNode(1);
    }
    return s;
};
