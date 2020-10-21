// any node n
// its children
// are 2n and 2n+1

// any node n
// its parent
// is Math.floor(n/2)

//find out if the tree is full

function BTNode(val){
    this.val = val
    this.left = null
    this.right = null
}


function BST(){
    this.root = null;

    this.add = function(val){
        if(!this.root){
            this.root = new BTNode(val)
            return this
        }
        runner = this.root
        while(true){
            if(val > runner.val){ //belongs right
                if(runner.right){//iterate
                    runner = runner.right
                }else{ //create node and return
                    runner.right = new BTNode(val)
                    return this
                }
            }else{ //belongs left
                if(runner.left){//iterate
                    runner=runner.left
                }else{ //create node and return
                    runner.left = new BTNode(val)
                    return this
                }
            }
        }
    }

    this.contains = function(val){
        runner = this.root
        while(runner){
            if(runner.val == val){
                return true
            }
            if(val > runner.val){//val must be right
                runner = runner.right
            }else{//val must be left
                runner= runner.left
            }
        }
        return false
    }

    this.size = function(node = this.root){
        if(!node){
            return 0
        }
        if(!node.right && !node.left){
            return 1
        }
        if(!node.right){
            return(1 + this.size(node.left))
        }
        if(!node.left){
            return(1 + this.size(node.right))
        }
        return(1+ this.size(node.right)+this.size(node.left))
    }

    this.height = function(node = this.root){
        if(!node){
            return 0
        }
        if(!node.right && !node.left){
            return 1
        }
        if(!node.right){
            return(1 + this.height(node.left))
        }
        if(!node.left){
            return(1 + this.height(node.right))
        }
        return(1+ Math.max(this.height(node.right),this.height(node.left)))
    }

    this.status = function(){
        stack = [this.root]
        while(stack.length){
            runner = stack.pop()
            console.log(runner.val)
            if(runner.right){
                stack.push(runner.right)
            }
            if(runner.left){
                stack.push(runner.left)
            }
        }
    }

    this.pushit = function(){
        stack = [this.root] 
        newarr = []
        while(stack.length){
            runner = stack.pop()
            newarr.push(runner.val)
            if(runner.right){
                stack.push(runner.right)
            }
            if(runner.left){
                stack.push(runner.left)
            }
        }
        return newarr
    }

    this.isValid = function(){
        return true
    }

    this.repair = function(){
        array = []
        if (!this.isValid){
            return false
        }
        array = this.pushit() 
        console.log(array)
        for (let i=1; i<array.length; i++){
            if (array[2*i] < array[i] && array[(2*i)+1] > array[i]){
                
            }
            else{
                
            }
        }
    }

}

bst = new BST()

bst.add(50)
bst.add(40)
bst.add(60)
bst.add(45)
bst.add(65)
bst.add(35)
bst.add(55)
bst.repair()