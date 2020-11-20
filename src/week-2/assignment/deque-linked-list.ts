import {LinkedListNode} from '../linked-list-node/linked-list-node';
import {Deque} from './deque.interface';


/**
 * Time complexity of all operations except removeLast() is O(1)
 * Time complexity of removeLast() is O(N)
 */
export class DequeLinkedList<T> implements Deque<T> {
  private first: LinkedListNode<T> = null;
  private last: LinkedListNode<T> = null;
  private numberOfItems = 0;

  [Symbol.iterator](): Iterator<T, any, undefined> {
    return {
      next: () => {
        return {
          done: this.isEmpty(),
          value: this.isEmpty() ? undefined : this.removeFirst(),
        };
      },
    };
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.numberOfItems;
  }

  addFirst(item: T) {
    this.assertNotNull(item);

    const oldFirst = this.first;
    this.first = new LinkedListNode(item);
    this.first.next = oldFirst;
    this.numberOfItems++;
    if (this.size() === 1) {
      this.last = this.first;
    }
  }

  addLast(item: T) {
    this.assertNotNull(item);

    const newLast = new LinkedListNode(item);

    if (this.last) {
      this.last.next = newLast;
    }
    this.last = newLast;
    this.numberOfItems++;

    if (this.size() === 1) {
      this.first = this.last;
    }
  }

  removeFirst(): T {
    this.assertEmptyStack();

    const item = this.first;
    this.first = this.first.next;
    this.numberOfItems--;
    return item.node;
  }

  removeLast(): T {
    this.assertEmptyStack();

    let cur = this.first;
    while (cur.next && cur.next !== this.last) {
      cur = cur.next;
    }

    const oldLast = this.last;
    this.last = cur;
    this.numberOfItems--;
    return oldLast.node;
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