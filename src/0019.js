/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const getLength = () => {
        let p = 0;
        let curr = head;
        while(curr !== null) {
            curr = curr.next;
            p += 1;
        }
        return p;
    };
    const len = getLength();
    if(len === n) {
        return head.next;
    }
    let c = 1;
    let curr = head;
    while(c < len - n) {
        c += 1;
        curr = curr.next;
    }
    if(!curr.next) {
        return null;
    }
    curr.next = curr.next.next;
    return head;
};
