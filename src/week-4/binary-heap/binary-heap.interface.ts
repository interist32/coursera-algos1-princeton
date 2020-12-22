declare interface BinaryHeap<T> {
  insert(item: T): void;
  size(): number;
  // Just for testing purpose
  getArrCopy(): T[];
}

export declare interface MaxBinaryHeap<T> extends BinaryHeap<T> {
  max(): T|null;
  removeMax(): T;
}

export declare interface MinBinaryHeap<T> extends BinaryHeap<T> {
  min(): T|null;
  removeMin(): T;
}