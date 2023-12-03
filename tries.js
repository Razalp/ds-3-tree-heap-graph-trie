class trieNode {
    constructor() {
      this.children = {};
      this.isEndflag = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new trieNode();
    }
    insert(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          node.children[char] = new trieNode();
        }
        node = node.children[char];
      }
      node.isEndflag = true;
    }
  
    search(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndflag;
    }
  
    startswith(prefix) {
      let node = this.root;
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  
    delete(word){
      if(!this.search(word)){
          console.log("word is not in trie");
          return
      }
      let node=this.root;
      for(let i=0;i<word.length;i++){
          const char = word[i]
          node = node.children[char]
      }
      node.isEndflag=false
    }
  }
  const trie = new Trie();
  
  // Insert words into the trie
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("app");
  trie.delete("apple");
  
  console.log(trie.search("apple"));
  
  console.log(trie.startswith("app"));
  