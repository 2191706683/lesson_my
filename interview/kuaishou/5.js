// 删除链表的一个节点
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// head 头指针
// val 值的判断
function deleteNode(head, val) {
  if (!head) return null;
  // 头节点要被删除
  if (head.val === val) return head.next;
  //
  let prev = head;
  let curr = head.next;
  // 结尾为空
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next
      return head;
    }
    prev = curr;
    curr = curr.next;
  }
  // 没有找到
  return head;
}