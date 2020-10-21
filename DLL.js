function DLnode(val){
    this.value = val
    this.next = null
    this.prev = null
}

function DLList(){
    this.head = null
    this.tail = null

    this.prepend = function(val, nodetoprepend){
        runner = this.head
        if (this.head.value == val){
            this.head = nodetoprepend
            runner.prev = nodetoprepend
            nodetoprepend.next = runner
            return this
        }
                while (runner){
                    if (runner.value == val){
                        console.log("inside the if statement")
                        runner.prev.next = nodetoprepend
                        nodetoprepend.prev = runner.prev
                        runner.prev = nodetoprepend
                        nodetoprepend.next = runner
                        return this
                    }
                    else{
                        runner = runner.next
                    }
                }
    }

    this.append = function(val, nodetoappend){
        runner = this.head
        while (runner){
            if (runner.value == val){
                if (this.tail == val){
                    
                }
                console.log("we made it this far")
                runner.next.prev = nodetoappend
                nodetoappend.next = runner.next
                runner.next = nodetoappend
                nodetoappend.prev = runner
                return this
            }
            else{
                runner = runner.next
            }
        }
    }

    this.display = function(){
        runner = this.head
        while(runner){
            console.log(runner.value)
            runner = runner.next
        }
    }

    this.is_valid = function(){
        if (this.has_loop()){
            return  "first false", false
        }
        runner = this.head
        if (runner.prev != null || runner.value == null){
            return false, "second false"
        }
        runner = runner.next
        while(runner != this.tail){
            if (runner.prev != null || runner.value  == null || runner.next == null){
                return false
            }
            else {
                runner = runner.next
            }
        }
        if (this.tail.next != null || this.tail.prev == null || this.tail.value == null){
            return false
        }
        else {
            return true
    }
}

list = new DLList()
a = new DLnode('a')
b = new DLnode('b')
c = new DLnode('c')
d = new DLnode('d')
e = new DLnode('e')
f = new DLnode('f')
g = new DLnode('g')
z = new DLnode('z')
h = new DLnode('h')


list.head = a
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g
list.tail = g
b.prev = a
c.prev = b
d.prev = c
e.prev = d
f.prev = e
g.prev = f

console.log(list.is_valid)
// list.prepend('a', z)
// list.append('c', h)
// list.display()


//prepend
//append sticking it to the end
//k to last count backwards 2 nodes
// delete the middle, direct pointer to node, delete it
