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
var mergeTwoLists = function(l1, l2) {
    let s = {
        next: null,
    };
    const r = s;
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            s.next = l1;
            l1 = l1.next;
        }
        else {
            s.next = l2;
            l2 = l2.next;
        }
        s = s.next;
    }
    s.next = l1 === null ? l2 : l1;
    return r.next;
};
