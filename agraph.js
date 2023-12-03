class graph{
    constructor(){
        this.adjList={};
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this,this.adjList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return this.adjList[vertex1].has(vertex2) && this.adjList[vertex2].has(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adjList[vertex1].delete[vertex2]
        this.adjList[vertex2.delete[vertex1]]
    }
    display(){
        for(let vertex in this.adjList){
            console.log(vertex +" -> " + [...this.adjList[vertex]])
        }
    }
}
const g=new graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A","B");
g.addEdge("A","C");
g.display();