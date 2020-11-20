export declare interface Deque<T> extends Iterable<T> {
  isEmpty(): boolean;
  size(): number;
  addFirst(item: T): void;
  addLast(item: T): void;
  removeFirst(): T;
  removeLast(): T;
}