class node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root===null;
    }
    insert(value){
        const newNode=new node(value);
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value;
        }
        else{
            return this.min(root.left)
        }
    }
    levelOrder(){
        let QUEUE=[];
        QUEUE.push(this.root);
        while(QUEUE.length){
            let curr=QUEUE.shift();
            console.log(curr.value);
            if(curr.left){
                QUEUE.push(curr.left)
            }
            if(curr.right){
                QUEUE.push(curr.right)
            }

        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value)
        }
    }
}
const bst=new BST();
bst.insert(10);
bst.insert(20);
bst.levelOrder()
function height(root){
    if(!root){
        return null;
    }else{
        let left=height(root.left);
        let right=height(root.right);
        return 1+Math.max(left,right)
    }
}
console.log("height is = " + height(bst.root))
function isValid(root){
    let previous=-Infinity
    let isValid=true;
    function inOrder(node){
        if(!node){
            return ;
        }
        inOrder(node.left)
            if(previous>node.value){
                isValid=false;
                return 
            }
            previous =node.value;
            inOrder(node.right)
        }
        inOrder(root);
        return isValid
    }
console.log("is valid = " +isValid(bst.root));