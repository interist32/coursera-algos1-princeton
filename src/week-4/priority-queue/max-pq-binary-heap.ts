import {MaxBinaryHeap} from '../binary-heap/max-binary-heap';
import {MaxPQ} from './pq-interface';


export class MaxPQBinaryHeap<T> implements MaxPQ<T> {
  private readonly maxHeap = new MaxBinaryHeap<T>();

  delMax(): T {
    return this.maxHeap.removeMax();
  }

  insert(item: T): void {
    this.maxHeap.insert(item);
  }

  isEmpty(): boolean {
    return this.maxHeap.size() === 0;
  }

  size(): number {
    return this.maxHeap.size();
  }

  max(): T {
    return this.maxHeap.max();
  }
}