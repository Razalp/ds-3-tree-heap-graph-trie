class Node {
    constructor(value) {
      this.value = value;
      this.right = null;
      this.left = null;
    }
  }
  class tree {
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
    insertValue(root,value){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
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
}
const t=new tree()

console.log(t.isEmpty());