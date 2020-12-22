import {swap} from '../../utils/swap';
import {MinBinaryHeap as MinBinaryHeapInterface} from './binary-heap.interface';


export class MinBinaryHeap<T> implements MinBinaryHeapInterface<T> {
  private readonly arr: T[] = [];

  removeMin(): T {
    const min = this.arr[0];
    const lastIndex = this.arr.length - 1;
    this.arr[0] = this.arr[lastIndex];
    this.arr.splice(lastIndex, 1);
    this.sink(0);
    return min;
  }

  insert(item: T): void {
    this.arr.push(item);
    this.swim(this.arr.length - 1);
  }

  size(): number {
    return this.arr.length;
  }

  min(): T|null {
    return this.size() === 0 ? null : this.arr[0];
  }

  getArrCopy(): T[] {
    return this.arr.slice();
  }

  private sink(i: number) {
    let lastIndex = this.arr.length - 1;

    while (i < lastIndex) {
      let child1Index = i * 2 + 1;
      let child2Index = i * 2 + 2;

      if (child1Index > lastIndex) break;

      let leastChildIndex = child1Index === lastIndex ?
          child1Index :
          this.arr[child1Index] < this.arr[child2Index] ? child1Index :
                                                          child2Index;

      if (this.arr[i] <= this.arr[leastChildIndex]) break;
      swap(this.arr, leastChildIndex, i);
      i = leastChildIndex;
    }
  }

  private swim(i: number) {
    while (i > 0) {
      let parent = Math.trunc((i - 1) / 2);
      if (this.arr[parent] <= this.arr[i]) break;
      swap(this.arr, parent, i);
      i = parent;
    }
  }
}