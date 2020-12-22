import {MinBinaryHeap} from '../binary-heap/min-binary-heap';
import {MinPQ} from './pq-interface';


export class MinPQBinaryHeap<T> implements MinPQ<T> {
  private readonly minHeap = new MinBinaryHeap<T>();

  delMin(): T {
    return this.minHeap.removeMin();
  }

  insert(item: T): void {
    this.minHeap.insert(item);
  }

  isEmpty(): boolean {
    return this.minHeap.size() === 0;
  }

  size(): number {
    return this.minHeap.size();
  }

  min(): T {
    return this.minHeap.min();
  }
}