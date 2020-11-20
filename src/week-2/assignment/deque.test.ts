import {DequeArray} from './deque-array';
import {DequeCircularArray} from './deque-circular-array';
import {DequeLinkedList} from './deque-linked-list';
import {Deque} from './deque.interface';


const dequeImplementations: ({new (): Deque<number>})[] = [
  DequeLinkedList,
  DequeArray,
  DequeCircularArray,
];

for (const DequeImplementation of dequeImplementations) {
  describe(`${DequeImplementation.name} implementation`, () => {
    let deque: Deque<number>;

    beforeEach(() => {
      deque = new DequeImplementation();
    });

    it('addFirst() and removeFirst()', () => {
      deque.addFirst(1);
      deque.addFirst(2);
      expect(deque.removeFirst()).toBe(2);
      expect(deque.removeFirst()).toBe(1);
    });

    it('addLast() and removeLast()', () => {
      deque.addLast(1);
      deque.addLast(2);
      expect(deque.removeLast()).toBe(2);
      expect(deque.removeLast()).toBe(1);
    });

    it('addFirst() and removeLast()', () => {
      deque.addFirst(1);
      deque.addFirst(2);
      expect(deque.removeLast()).toBe(1);
      expect(deque.removeLast()).toBe(2);
    });

    it('addLast() and removeFirst()', () => {
      deque.addLast(1);
      deque.addLast(2);
      expect(deque.removeFirst()).toBe(1);
      expect(deque.removeFirst()).toBe(2);
    });

    it('tricky one', () => {
      deque.addFirst(1);
      deque.removeFirst();
      deque.addLast(1);
      expect(deque.removeLast()).toBe(1);
    });

    it('returns correct size', () => {
      expect(deque.size()).toBe(0);
      deque.addFirst(1);
      expect(deque.size()).toBe(1);
      deque.addLast(2);
      expect(deque.size()).toBe(2);
      deque.removeFirst();
      expect(deque.size()).toBe(1);
      deque.removeLast();
      expect(deque.size()).toBe(0);
    });

    it('throws an exception when removeFirst() / removeLast() called when deque is empty',
       () => {
         expect(() => deque.removeFirst()).toThrowError('No such element');
         expect(() => deque.removeLast()).toThrowError('No such element');
       });

    it('throws an exception when addFirst() / addLast() called with null',
       () => {
         expect(() => deque.addFirst(null)).toThrowError('Item cannot be null');
         expect(() => deque.addLast(null)).toThrowError('Item cannot be null');
       });

    it('works as iterable', () => {
      deque.addFirst(2);
      deque.addFirst(1);
      deque.addLast(3);
      deque.addLast(4);

      const iterator = deque[Symbol.iterator]();
      expect(iterator.next().value).toBe(1);
      expect(iterator.next().value).toBe(2);
      expect(iterator.next().value).toBe(3);
      expect(iterator.next().value).toBe(4);
      expect(iterator.next().done).toBe(true);

      deque.addFirst(2);
      deque.addFirst(1);
      deque.addLast(3);
      deque.addLast(4);
      expect([...deque]).toEqual([1, 2, 3, 4]);
    });
  });
}
