class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class SLL:
    def __init__(self):
        self.head = None

def append(self, value):
        # create a node with the value passed
        newnode = Node(value)
        if self.head == None:
            # add the new node to the SLL
            self.head = newnode
        else:
            runner = self.head
            # increment runner until we get runner to a node where the node's .next is none (the last node)
            while runner.next != None:
                # increment runner by one node
                runner = runner.next
            runner.next = newnode
        return self

def display(self):
    runner = self.head
        # print(runner.next.next.next)
    while runner != None:
        if runner.next.next == None:
            runner.next = None
            return self
        else:
            runner = runner.next 

newSLL = SLL()
newSLL.append(5).append(8).append(6).display()

