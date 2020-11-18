import {Stack} from './stack.interface';


/**
 * In Javascript array are dynamic, but for the purity of experiment I treat it
 * like in Java or C++ imitating the process of allocation memory.
 */
export class ArrayStack<T> implements Stack<T> {
  private array = Array.from({length: 1}, () => null);
  private nextPosition = 0;

  push(item: T) {
    this.array[this.nextPosition++] = item;
    if (this.nextPosition === this.array.length) {
      // double the length once the size limit is reached
      this.array =
          [...this.array, Array.from({length: this.array.length}, () => null)];
    }
  }

  pop(): T {
    this.nextPosition--;
    const item = this.array[this.nextPosition];
    this.array = this.array.slice(0, this.nextPosition);
    return item;
  }

  isEmpty(): boolean {
    return this.array.length === 0;
  }
}