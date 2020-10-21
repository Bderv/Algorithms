// SLL have classes and objects
// it has one attribute and only 1 attribute, which is called head
// head starts at null or at some ListNode ie: head => null || ListNode
// SlNode has to attributes, value and next
// SlNode value => something, a number or letter
// SlNode next => either null || SlNode
// runner = SlNode that becomes runner = runner.next
// pros to a SLL you can insert nodes in the middle easily compared to arrays.
// cons to a SLL you have to iterate through the SLL to be able to read the node value.

// ES6 format
// class SlNode{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }
// bob = new SlNode('bob')

// ES5 format
// function Slnode(val){
//     this.value = val
//     this.next = null
// }
// // the function should take one input and return the new head of the list
// function Slist(val){
//     this.head = val
//     this.reverse = (head)=>{
//         if (!head || !head.next){
//             return head
//         }
//     }
//     newhead = reverse(head.next)
//     console.log(newhead)

// }

// bob = new Slnode('bob')
// brian = new Slnode('brian')
// cosmo = new Slnode('cosmo')
// leeroy = new Slnode('leeroy')
// newlist = new Slist('bob','brian','cosmo','leeroy')
// newlist.reverse

// function someclass(someparam){
//     this.somevalue = someparam

//     this.somefunction = function(){
//         console.log('this is some value', this.somevalue)
//     }
// }

// bob = new someclass('bobs name')
// carl = new someclass('carls name')
// console.log(bob)
// console.log(bob.somevalue)
// bob.somefunction()
// carl.somefunction()

function SlNode(value){
    this.val = value
    this.next = null
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
}
// use annotations to keep track of where you are.
list = new Slist()
a = new SlNode('a')
b = new SlNode('b')
c = new SlNode('c')

list.head = a
a.next = b
b.next = c

// console.log(list,a,b,c)
list.reverse()

// (c).next = (b)
// (b).next.next = (b)