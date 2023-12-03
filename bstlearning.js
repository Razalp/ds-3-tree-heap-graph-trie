class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

insert(value){
    const newNode=new Node(value);
    if(this.isEmpty()){
        this.root=newNode
    }else{
        this.insertValue(this.root,newNode)
    }
}
insertValue(root,newNode){
    if(newNode.value < root.value){
        if(root.left===null){
            root.left=newNode;
        }else{
            this.insertValue(root.left,newNode)
        }
    }else{
        if(root.right===null){
            root.right=newNode
        }else{
            this.insertValue(root.right,newNode)
        }
    }
}
levelOrder(){
    let QUEUE=[];
    QUEUE.push(this.root);
    while(QUEUE.length){
        let curr=QUEUE.shift()
        console.log(curr.value)
        if(curr.left){
            QUEUE.push(curr.left)
        }
        if(curr.right){
            QUEUE.push(curr.right)
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
max(root){
    if(!root.right){
        return root.value;
    }else{
        return this.max(root.right)
    }
}

  
}
function validate(root) {
    let previous = -Infinity;
    let isValid = true;
    function inorder(node) {
      if (!node) {
        return;
      }
      inorder(node.left);
      if (previous > node.value) {
        isValid = false;
        return;
      }
      previous = node.value;
      inorder(node.right);
    }
    inorder(root);
    return isValid;
  }

const bts = new BST();
// const input=[25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
// for(let i of input){
//     bts.insert(i)
// }

const root=new Node(5)
root.left=new Node(2)
root.right=new Node(7)
bts.inOrder(bts.root);
// console.log(validate(bts.root));
// bts.insert(10);
// bts.insert(30);
// bts.insert(40);
// bts.insert(50);
// bts.insert(100);
// bts.insert(110);
// bts.insert(20);
// bts.insert(70);
// bts.insert(90);
// console.log("max "+bts.max(bts.root));
// bts.levelOrder(bts.root);
// function height(root){
//     if(!root){
//         return null;
//     }
//     const left=height(root.left)
//     const right=height(root.right)
//     return 1+Math.max(left,right)
// }
// console.log("height " +height(bts.root))