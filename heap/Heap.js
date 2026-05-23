class Heap {
  constructor(comparator) {
    this.heap = [];
    this.cmp = comparator;
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
      if (this.cmp(this.heap[parentIndex], this.heap[i]) <= 0) break;
      this.swap(parentIndex, i);
      i = parentIndex;
    }
  }
  extract() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const ans = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapify(0);
    return ans;
  }
  heapify(i) {
    const n = this.heap.length;
    while (true) {
      let best = i;
      let l = this.left(i);
      let r = this.right(i);

      if (l < n && this.cmp(this.heap[l], this.heap[best]) <= 0) best = l;
      if (r < n && this.cmp(this.heap[r], this.heap[best]) <= 0) best = r;

      if (i === best) break;
      this.swap(i, best);
      i = best;
    }
  }
  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }
}
