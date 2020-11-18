import {LinkedListNode} from '../linked-list-node/linked-list-node';
import {Queueu} from './queue.interface';


export class LinkedListQueue<T> implements Queueu<T> {
  private first: LinkedListNode<T> = null;
  private last: LinkedListNode<T> = null;

  enqueue(item: T): void {
    const newLast = new LinkedListNode(item);
    newLast.next = null;

    if (this.isEmpty()) {
      this.last = newLast;
      this.first = newLast;
      return;
    }

    this.last.next = newLast;
    this.last = newLast;
  }

  dequeue(): T {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.first;
    this.first = this.first.next;
    return item.node;
  }

  isEmpty(): boolean {
    return this.first === null;
  }
}