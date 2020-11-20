import {QueueArray} from './queue-array';


export class QueueCircularArray<T> extends QueueArray<T> {
  protected resize(size: number) {
    if (this.tail >= this.head) {
      super.resize(size);
      return;
    }

    let i = this.head;
    let j = 0;

    const copy = Array.from({length: size}, () => null);
    while (i <= this.tail) {
      copy[j] = this.array[i];
      j++;
      i = (i + 1) % this.array.length;
    }
    this.array = copy;
    this.head = 0;
    this.tail = j - 1;
  }

  protected isFull(): boolean {
    return (this.head - 1 === this.tail) || super.isFull();
  }
}