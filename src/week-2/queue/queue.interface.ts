export declare interface Queueu<T> {
  enqueue(item: T): void;

  dequeue(): T;

  isEmpty(): boolean;
}