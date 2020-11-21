import {getRandom} from '../../../utils/getRandom';
import {DequeCircularArray} from '../deque/deque-circular-array';
import {RandomizedQueue} from './randomized-queue.interface';


export class RandomizedQueueDeque<T> extends DequeCircularArray<T> implements
    RandomizedQueue<T> {
  enqueue(item: T): void {
    if (getRandom(0, 1)) {
      this.addFirst(item);
    } else {
      this.addLast(item);
    }
  }

  dequeue(): T {
    if (getRandom(0, 1)) {
      return this.removeFirst();
    }
    return this.removeLast();
  }

  sample(): T {
    // I was unable to come up with better solution
    const array = this.array.filter((x) => x !== null);
    return array[getRandom(0, array.length - 1)];
  }

  [Symbol.iterator](): Iterator<T> {
    return {
      next: () => {
        return {
          done: this.isEmpty(),
          value: this.isEmpty() ? undefined : this.dequeue(),
        };
      },
    };
  }
}