class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class binarySearchTree{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root===null;
    }
    insert(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode;
            }else{
                this.insertNode(root.left,newNode);
            }
        }
        else if(newNode.value>root.value){
            if(root.right===null){
                root.right=newNode;
            }else{
                this.insertNode(root.right,newNode);
            }
        }
        }
        search(root,value){
            if(!root){
                return false
            }else{
                if(root.value===value){
                    return true
                }else if(value<root.value){
                    return this.search(root.left,value)
                }else{
                    return this.search(root.right,value)
                }
            }
        }
    preOrder(root){
    if(root){
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
}
inOrder(root){
    if(root){
       
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
    }
}
postOrder(root){
    if(root){
       
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
    }
}
levelOrder(){
    const Queue=[];
    Queue.push(this.root);
    while(Queue.length){
        let curr=Queue.shift();
        console.log(curr.value);
        if(curr.left){
            Queue.push(curr.left)
        }
        if(curr.right){
            Queue.push(curr.right);
        }
    }
}
min(root){
    if(!root.left){
        return root.value;
    }else{
        return this.min(root.left)
    }
}
max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
}
delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(node, value) {
    if (!node) {
      return null;
    } else if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        let temp = this.min(node.right);
        node.value = temp.value;
        node.right = this.deleteNode(node.right, temp.value);
        return node;
      }
    }
  }
}
const bst=new binarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(12);
bst.insert(18);
bst.insert(20);
bst.insert(30);
bst.insert(40);
bst.insert(50);
bst.insert(60);

console.log("preOrder")
// bst.preOrder(bst.root)
console.log("inOrder");
// bst.inOrder(bst.root)
console.log("posterOrder");
// bst.postOrder(bst.root);
console.log("breath first search");
bst.delete(60);
 bst.delete(50);
bst.delete(40);
 bst.delete(30);
bst.delete(10);
bst.levelOrder(bst.root);
console.log("minimum value");
console.log((bst.min(bst.root)).value);
console.log("max");
console.log(bst.max(bst.root));
console.log("is tree is empty ? " + bst.isEmpty());

function height(root) {
    if (!root) {
      return null;
    }
    const left = height(root.left);
    const right = height(root.right);
    return 1 + Math.max(left, right);
  }
  console.log("height " +height(bst.root))