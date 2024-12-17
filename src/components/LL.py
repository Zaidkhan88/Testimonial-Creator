class ListNode():
    def __init__(self,val):
        self.val = val
        self.next = None
class LinkedList():
    def __init__(self):
        self.head = None
    def insert(self,val):
        newnode = ListNode(val)
        if self.head is None:
            self.head = newnode

        else:
            cur = self.head
            while cur.next:
                cur = cur.next
            cur.next = newnode
    def printList(self):
        cur = self.head
        while cur is not None:
            print(cur.val)
            cur = cur.next
def mergeList(head1,head2):
    cur1 = head1
    cur2 = head2
    L3 = LinkedList()
    while cur1 is not None and cur2 is not None:
        if cur1.val>cur2.val:
            L3.insert(cur2.val)
            cur2 = cur2.next
        else:
            L3.insert(cur1.val)
            cur1 = cur1.next
    while cur1 is not None:
        L3.insert(cur1.val)
        cur1 = cur1.next
    while cur2 is not None:
        L3.insert(cur2.val)
        cur2 = cur2.next
    cur3 = L3.head
    while cur3 is not None:
        print(cur3.val)
        cur3 = cur3.next
    # return L3.head


        


L1 = LinkedList()
L1.insert(2)
L1.insert(4)
L1.insert(6)
L1.insert(8)
# L1.printList()
L2 = LinkedList()
L2.insert(1)
L2.insert(5)
L2.insert(7)
L2.insert(9)
L2.insert(10)

print(mergeList(L1.head,L2.head))
