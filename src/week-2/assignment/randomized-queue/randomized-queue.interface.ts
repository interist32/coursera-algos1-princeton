export declare interface RandomizedQueue<T> extends Iterable<T> {
  isEmpty(): boolean;
  size(): number;
  enqueue(item: T): void;
  dequeue(): T;
  sample(): T;
}