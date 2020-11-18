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
      this.resize(this.array.length * 2);
    }
  }

  pop(): T {
    this.nextPosition--;
    const item = this.array[this.nextPosition];
    if (this.nextPosition > 0 && this.nextPosition < this.array.length / 4) {
      this.resize(this.array.length / 2);
    }
    return item;
  }

  isEmpty(): boolean {
    return this.array.length === 0;
  }

  private resize(size: number) {
    const copy = Array.from({length: size}, () => null);
    for (let i = 0; i < this.array.length; i++) {
      copy[i] = this.array[i];
    }
    this.array = copy;
  }
}