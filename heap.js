class MinHeap {
    constructor() {
      this.heap = [];
    }
    buildHeap(arr) {
      this.heap = arr;
      for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        this.heapifyDown(i);
      }
    }
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
    remove() {
      if (!this.heap.length) {
        return null;
      }
      if (!this.heap === 1) {
        return this.heap.pop();
      }
      const minValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return minValue;
    }
    heapifyDown(index) {
      const rightChildindex = 2 * index + 1;
      const leftChildindex = 2 * index + 2;
      let smallestIndex = index;
        if (this.heap[leftChildindex] < this.heap[smallestIndex]) {
        smallestIndex = leftChildindex;
      }
      if (this.heap[rightChildindex] < this.heap[smallestIndex]) {
        smallestIndex = rightChildindex;
      }
      if (index !== smallestIndex) {
        [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex],this.heap[index]];
        this.heapifyDown(smallestIndex);
      }
    }
    heapifyUp(index) {
      while(index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] > this.heap[index]) {
          [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex],];
        } else {
          break;
        }
      }
    }
  }
  const a = new MinHeap();
  a.buildHeap([1, 65, 7, 5, 2, 20, 25]);
  console.log(a.heap);
  // a.insert(10)
  // a.insert(5)
  // a.insert(20)
  // a.insert(8)
  
  // a.insert(56)
  // a.insert(2)
  
  
  // console.log(a.heap);
  // console.log(a.remove());
  // console.log(a.remove());
  // a.insert(56);
  // console.log(a.heap);
  
  