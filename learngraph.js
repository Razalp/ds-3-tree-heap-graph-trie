class graph{
    constructor(){
        this.adjList={};
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=new Set();
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjList[vertex1]){
            this.adjList[vertex1]
        }
        if(this.adjList[vertex2]){
            this.adjList[vertex2]
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    hasEdge(vertex1, vertex2) {
        return this.adjList[vertex1].has(vertex2) && this.adjList[vertex2].has(vertex1);
    }

    removeEdge(vertex1,vertex2){
        this.adjList[vertex1].delete[vertex2]
        this.adjList[vertex2].delete[vertex1]
    }
  removeVertex(){
    if(!this.adjList[vertex]){
        return ;
    }
    for(let adjacencyList of this.adjList[vertex]){
        this.removeEdge(vertex,adjacencyList)
    }
    delete this.adjList[vertex]
  }

    display() {
        for (let vertex in this.adjList) {
            console.log(vertex + " -> " + [...this.adjList[vertex]]);
        }
    }

}
const g=new graph()
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A","B");
g.addEdge("A","C");
g.display()
