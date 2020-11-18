import {Queueu} from './queue.interface';


export class ArrayQueue<T> implements Queueu<T> {
  private array: T[] = Array.from({length: 1}, () => null);
  private head = 0;
  private tail = 0;

  enqueue(item: T): void {
    if (this.isFull()) {
      this.resize(this.array.length * 2);
    }
    this.array[this.tail++] = item;

    if (this.isEmpty()) {
      this.array[this.head] = item;
      return;
    }
  }

  dequeue(): T {
    const item = this.array[this.head++];

    if (this.tail - this.head < this.array.length / 4) {
      this.resize(this.array.length / 2);
    }
    return item;
  }

  isEmpty(): boolean {
    return this.array[this.head] === null;
  }

  private resize(size: number) {
    const copy = Array.from({length: size}, () => null);

    for (let i = this.head, j = 0; i <= this.tail; i++, j++) {
      copy[j] = this.array[i];
    }

    this.array = copy;
    this.tail = this.tail - this.head;
    this.head = 0;
  }

  private isFull(): boolean {
    return (Math.abs(this.tail - this.head) === this.array.length - 1);
  }
}