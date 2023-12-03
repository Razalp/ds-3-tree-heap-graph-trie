class minHeap{
    constructor(){
        this.heap=[]
    }
    buildHeap(arr){
        this.heap=arr;
        for(let i=Math.floor(arr.length/2);i>=0;i++){
            this.heapFiydown(i)
        }
    }
    heapFiydown(index){
        let rc=2* index +1;
        let lc=2*index +2;
        let si=index;
        if(this.heap[lc]<this.heap[si]){
            sm=lc;
        }
        if(this.heap[rc]< this.heap[si]){
            sm=lc
        }
        if(index !== si){
            [this.heap[index],this.heap[si]]=[this.heap[si],this.heap[index]]
        this.heapFiydown(si)
        }
    }
}