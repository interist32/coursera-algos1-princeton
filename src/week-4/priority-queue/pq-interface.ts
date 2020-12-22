declare interface PQ<T> {
  insert(item: T): void;
  isEmpty(): boolean;
  size(): number;
}

export declare interface MaxPQ<T> extends PQ<T> {
  max(): T;
  delMax(): T;
}

export declare interface MinPQ<T> extends PQ<T> {
  min(): T;
  delMin(): T;
}
