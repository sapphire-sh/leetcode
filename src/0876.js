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
var middleNode = function(head) {
    if(head === null) {
        return head;
    }
    const x = [];
    let curr = head;
    while(curr !== null) {
        x.push(curr);
        curr = curr.next;
    }
    const index = Math.ceil((x.length - 1) / 2);
    return x[index];
};
