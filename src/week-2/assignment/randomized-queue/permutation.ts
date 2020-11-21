import {RandomizedQueueDeque} from './randomized-queue-deque';


export class Permutation<T> {
  private randomizedQueue = new RandomizedQueueDeque<T>();

  constructor(
      private k: number,
      characters: T[],
  ) {
    for (const char of characters) {
      this.randomizedQueue.enqueue(char);
    }
    console.table({
      [`${characters.join(' ')}, k=${k}`]: {
        sample: this.randomizedQueue.sample(),
        items: this.getRandomizedItems(),
      },
    });
  }

  private getRandomizedItems(): string {
    const items = [];
    const iterator = this.randomizedQueue[Symbol.iterator]();

    for (let i = 0; i < this.k; i++) {
      const {value} = iterator.next();
      items.push(value);
    }

    return items.join(' ');
  }
}