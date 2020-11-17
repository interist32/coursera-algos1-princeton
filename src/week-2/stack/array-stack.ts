import {Stack} from './stack.interface';

export class ArrayStack<T> implements Stack<T> {
  private readonly array = [];

  push(item: T) {
    this.array.push(item);
  }

  pop(): T {
    return this.array.pop();
  }

  isEmpty(): boolean {
    return this.array.length === 0;
  }
}