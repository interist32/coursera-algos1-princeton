import {ArrayQueue} from './array-queue';
import {CircularArrayQueue} from './circular-array-queue';
import {LinkedListQueue} from './linked-list-queue';
import {Queueu} from './queue.interface';


describe('Queue test', () => {
  const queueImplementations: ({new (): Queueu<string>})[] = [
    LinkedListQueue,
    ArrayQueue,
    CircularArrayQueue,
  ];

  /**
   * If item is `number` then enqueue item
   * If item is `-` then dequeue item
   */
  const cases = [
    {input: '5 4 3 2 1 - - - - -', expected: '5 4 3 2 1'},
    {input: '5 - 4 - 3 - 2 - 1 -', expected: '5 4 3 2 1'},
    {input: '1 - -', expected: '1'},
    {input: '5 4 - 3 - -', expected: '5 4 3'},
    {input: '1 2 3 -', expected: '1'},
    {input: '1 2 3 4 5 6 7 8 - - - - - - - -', expected: '1 2 3 4 5 6 7 8'},
    {input: '1 2 3 4 - 5 - - ', expected: '1 2 3'},
  ];

  for (const QueueImplementation of queueImplementations) {
    describe(`${QueueImplementation.name} implementation`, () => {
      for (const {input, expected} of cases) {
        it(`for ${input} returns ${expected}`, () => {
          const queue = new QueueImplementation();
          const result = [];
          for (const item of input.split(' ')) {
            if (item === '-') {
              result.push(queue.dequeue());
            } else {
              queue.enqueue(item);
            }
          }
          expect(result.join(' ').trim()).toBe(expected);
        });
      }
    });
  }
});