import {Deque} from './deque.interface';


/**
 * Time complexity of all operations except addFirst() / removeFirst() is O(1)
 * Time complexity of addFirst() / removeFirst() is O(N)
 */
export class DequeArray<T> implements Deque<T> {
  private readonly array: T[] = [];

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.array.length;
  }

  addFirst(item: T): void {
    this.assertNotNull(item);
    this.array.splice(0, 0, item);
  }

  addLast(item: T): void {
    this.assertNotNull(item);
    this.array.push(item);
  }

  removeFirst(): T {
    this.assertEmptyStack();
    return this.array.shift();
  }

  removeLast(): T {
    this.assertEmptyStack();
    return this.array.pop();
  }

  [Symbol.iterator](): Iterator<T, any, undefined> {
    return {
      next: () => {
        return {
          done: this.isEmpty(),
          value: this.isEmpty() ? undefined : this.removeFirst(),
        };
      }
    };
  }

  private assertEmptyStack() {
    if (this.isEmpty()) {
      throw new Error('No such element');
    }
  }

  private assertNotNull(item: T) {
    if (item === null) {
      throw new Error('Item cannot be null');
    }
  }
}