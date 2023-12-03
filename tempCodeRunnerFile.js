function height(root){
    if(!root){
        return null;
    }
    let left=height(root.left);
    let right=height(root.right);
    return 1+Math.max(left+right)
}