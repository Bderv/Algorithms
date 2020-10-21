class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class SLL:
    def __init__(self):
        self.head = None

    def append(self,value):
        newnode = Node(value)
        if self.head == None:
        #create a node with the value passed
        #add the new node to the SLL
            self.head = newnode
        else:
            runner = self.head
            while  runner.next != None:
                runner = runner.next
            runner.next = newnode
        return self

    def display(self):
        runner = self.head
        while runner != None:
            print(runner.value)
            runner = runner.next
        if runner.next == None:
            runner
        
    
    def removeFront(self):
        print(self.head)
        print(self.head.next)
        self.head = self.head.next

    


newSLL = SLL()
newSLL.append(5).append(8).append(6).display()


# node1 = Node(5)
# node2 = Node(8)
# node3 = Node(12)
# node1.next = node2
# node2.next = node3
# runner = node1
# newSLL.head = node1
# newSLL.display()
# newSLL.removeFront()
# print('removed the front')
# newSLL.display()