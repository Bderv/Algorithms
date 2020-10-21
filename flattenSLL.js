// take a parent SLL and child SLL and flatten them to a single list
// do not change the .child
// instead change the .next

function SlNode(value){
    this.val = value
    this.next = null
    this.child = null
}


function Slist(){
    this.head = null

    this.reverse = function(){
        runner = this.head
        while(runner.next.next != null){
            runner = runner.next
        }
        runner.next.next = runner
        // console.log(runner.next)
        runner = runner.next
        runner.next.next = this.head
        this.head.next = null
        this.head = runner
        console.log(runner, this.head)
    }

    this.flatten = function(){
        // sets the loop in motion, from the head
        runner = this.head
        while(runner.next){
            // if the runner has a .child then we flatten the array and stick the child in between the current runner and .next
            if (runner.child){
                parentrunner = runner.next
                runner.next = runner.child
                
            } 
            runner = runner.next
        }
        if (runner.next == null){
            runner.next = parentrunner
        }
    }

    this.has_loop = function(){
        let runner1 = this.head
        let runner2 = this.head
        while(runner2){
            runner1 = runner1.next
            if(!runner2.next){
                return "loop ended",false
            }
            else{
                runner2 = runner2.next.next
            }
            if(runner1 == runner2){
                return true
            }
        }
        return false
    }

    this.break_loop = function(){
        if(this.has_loop()){
            let runner1 = this.head
            let runner2 = this.head
            while(runner2){
                runner2 = runner2.next
                if(runner2.next == runner1){
                    runner2.next = null
                }
                else{
                    
                }
            }
        }
    }

    this.display = function(){
        runner = this.head
        while(runner){
            console.log(runner.val)
            runner = runner.next
        }
    }
}
// use annotations to keep track of where you are.
list = new Slist()
a = new SlNode('a')
b = new SlNode('b')
c = new SlNode('c')
d = new SlNode('d')
z = new SlNode('z')
y = new SlNode('y')
w = new SlNode('w')
//childList = new Slist()
list.head = a
a.next = b
b.next = c
c.next = d
d.next = z
z.next = y
y.next = w
w.next = b
//list.flatten()
console.log(list.has_loop())
//list.display()

