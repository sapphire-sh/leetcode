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
 var middleNode = function(head) {
    let curr = head;
    let p = curr;
    while(curr.next !== null) {
        p = p.next;
        curr = curr.next;
        if(curr.next) {
            curr = curr.next;
        }
    }
    return p;
};
