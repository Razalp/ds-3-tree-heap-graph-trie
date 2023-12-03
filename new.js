class Node{
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
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode;
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
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
}
const bst=new BST();
bst.insert(10);
bst.insert(8)
bst.insert(20);
bst.insert(30);
bst.insert(34)
bst.inOrder(bst.root)