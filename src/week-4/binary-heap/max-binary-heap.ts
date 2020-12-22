import {swap} from '../../utils/swap';
import {MaxBinaryHeap as MaxBinaryHeapInterface} from './binary-heap.interface';


export class MaxBinaryHeap<T> implements MaxBinaryHeapInterface<T> {
  private readonly arr: T[] = [];

  insert(value: T) {
    this.arr.push(value);
    this.swim(this.arr.length - 1);
  }

  removeMax(): T {
    const max = this.arr[0];
    const lastIndex = this.arr.length - 1;
    this.arr[0] = this.arr[lastIndex];
    this.arr.splice(lastIndex, 1);
    this.sink(0);
    return max;
  }

  // Just for testing purpose
  getArrCopy(): T[] {
    return this.arr.slice();
  }

  max(): T|null {
    return this.size() === 0 ? null : this.arr[0];
  }

  size(): number {
    return this.arr.length;
  }

  private sink(i: number) {
    const lastIndex = this.arr.length - 1;

    while (i < lastIndex) {
      let child1Index = i * 2 + 1;
      let child2Index = i * 2 + 2;

      if (child1Index > lastIndex) break;

      let greaterChildIndex = child1Index === lastIndex ?
          child1Index :
          this.arr[child1Index] > this.arr[child2Index] ? child1Index :
                                                          child2Index;
      if (this.arr[i] >= this.arr[greaterChildIndex]) break;
      swap(this.arr, i, greaterChildIndex);
      i = greaterChildIndex;
    }
  }

  private swim(i: number) {
    while (i > 0) {
      let parent = Math.trunc((i - 1) / 2);
      if (this.arr[i] <= this.arr[parent]) break;
      swap(this.arr, i, parent);
      i = parent;
    }
  }
}