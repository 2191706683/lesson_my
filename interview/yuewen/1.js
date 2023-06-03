function mergeTowLists(l1, l2) {
    // dummy 节点是链表 解法的技巧
    const dummyHead = new ListNode(0);  
    let cur = dummyHead;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 ? l1: l2;
    return dummyHead.next;
}   