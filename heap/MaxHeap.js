class MaxHeap {
  constructor() {
    this.heap = [];
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  insert(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      const parentIndex = this.parent(i);
      if (this.heap[parentIndex] >= this.heap[i]) break;
      this.swap(parentIndex, i);
      i = parentIndex;
    }
  }
  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.maxHeapify(0);
    return max;
  }
  maxHeapify(i) {
    const n = this.heap.length;
    while (true) {
      let largest = i;
      let l = this.left(i);
      let r = this.right(i);

      if (l < n && this.heap[l] > this.heap[largest]) largest = l;
      if (r < n && this.heap[r] > this.heap[largest]) largest = r;

      if (largest === i) break;
      this.swap(i, largest);
      i = largest;
    }
  }
}
