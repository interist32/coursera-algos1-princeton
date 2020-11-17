export declare interface Stack<T> {
  push(item: T): void;

  pop(): T;

  isEmpty(): boolean;
}