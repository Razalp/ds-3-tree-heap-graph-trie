class triNode{
    constructor(){
        this.children={}
        this.isEndFlag=false;
    }
}
class tries{
    constructor(){
        this.root=new triNode();
    }
    insert(word){
        let node=this.root;
        for(let i=0;i<word.length;i++){
            const char=word[i];
            if(!node.children[char]){
                node.children[char]=new triNode()
            }
            node=node.children[char]
        }
        node.isEndFlag=true;
    }
    search(word){
        let node=this.root;
        for(let i=0;i<word.length;i++){
            const char=word[i];
            if(!node.children[char]){
                node.children[char]=new triNode()
            }
            return false
        }
        return node.isEndFlag
    }
    prefixx(prefix){
        let node=this.root;
        for(let i=0;i<prefix.length;i++){
            const char=word[i];
            if(!node.children[char]){
                return false
            }
            node = node.children[char];
        }
        return true
    }
    delete(word){
        if(!this.search(word)){
            console.log("the word is not in the tries")
            return ;
        }
        let node=this.root;
        for(let i=0;i<word.length;i++){
            const char=word[i];
            node.children[char]=new triNode();
        }
        node.isEndFlag=false
    }
}
const trie =new tries()
trie.insert("apple ");
trie.insert("banana");
trie.insert("dragon fruit");
console.log(trie.prefixx("apple"))
