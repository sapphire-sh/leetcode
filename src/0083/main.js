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
var deleteDuplicates = function(head) {
    let a = head;
    while(a !== null) {
        if(a.next === null) {
            break;
        }
        if(a.val === a.next.val) {
            a.next = a.next.next;
        }
        else {
            a = a.next;
        }
    }
    return head;
};
