import {LinkedListNode} from '../linked-list-node/linked-list-node';
import {Stack} from './stack.interface';


export class StackLinkedList<T> implements Stack<T> {
  private firstNode: LinkedListNode<T>|null = null;

  push(item: T) {
    const oldFirst = this.firstNode;
    this.firstNode = new LinkedListNode(item);
    this.firstNode.next = oldFirst;
  }

  pop(): T {
    if (this.isEmpty()) return null;

    const item = this.firstNode;
    this.firstNode = this.firstNode.next;
    return item.node;
  }

  isEmpty(): boolean {
    return this.firstNode === null;
  }
}