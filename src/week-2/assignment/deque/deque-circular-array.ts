import {Deque} from './deque.interface';


/**
 * Time complexity of all operations is O(1).
 * resize() has O(N) but it's amortized as O(1)
 */
export class DequeCircularArray<T> implements Deque<T> {
  private array: T[] = [null];
  private first = 0;
  private last = 0;

  isEmpty(): boolean {
    return this.array[this.first] === null && this.array[this.last] === null;
  }

  size(): number {
    return this.isEmpty() ? 0 : Math.abs(this.last - this.first) + 1;
  }

  addFirst(item: T): void {
    this.assertNotNull(item);

    this.doubleSizeIfNecessary();
    this.first--;
    if (this.first === -1) {
      this.first = this.array.length - 1;
    }
    this.array[this.first] = item;
  }

  addLast(item: T): void {
    this.assertNotNull(item);

    this.doubleSizeIfNecessary();
    this.last = (this.last + 1) % this.array.length;
    this.array[this.last] = item;
  }

  removeFirst(): T {
    this.assertEmptyStack();

    const item = this.array[this.first];
    this.array[this.first] = null;
    this.first = (this.first + 1) % this.array.length;
    this.halveSizeIfPossible();
    return item;
  }

  removeLast(): T {
    this.assertEmptyStack();

    const item = this.array[this.last];
    this.array[this.last] = null;
    this.last--;
    if (this.last === -1) {
      this.last = this.array.length - 1;
    }
    this.halveSizeIfPossible();
    return item;
  }

  [Symbol.iterator](): Iterator<T> {
    return {
      next: () => {
        return {
          done: this.isEmpty(),
          value: this.isEmpty() ? undefined : this.removeFirst(),
        };
      },
    };
  }

  private isFull(): boolean {
    return this.size() === this.array.length;
  }

  private canBeHalved(): boolean {
    return this.size() < this.array.length / 4;
  }

  private doubleSizeIfNecessary() {
    if (this.isFull()) {
      this.resize(this.array.length * 2);
    }
  }

  private halveSizeIfPossible() {
    if (this.canBeHalved()) {
      this.resize(this.array.length / 2);
    }
  }

  private resize(size: number) {
    const copy = Array.from({length: size}, () => null);

    let i = this.first;
    let j = 0;

    while (j < this.array.length) {
      copy[j] = this.array[i];
      i = (i + 1) % this.array.length;
      j++;
    }
    this.array = copy;
    this.first = 0;
    this.last = j - 1;
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