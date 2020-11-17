import {ArrayStack} from './array-stack';
import {LinkedListStack} from './linked-list-stack';
import {Stack} from './stack.interface';


describe('Stack test', () => {
  const stackImplementations: ({new (): Stack<string>})[] = [
    LinkedListStack,
    ArrayStack,
  ];

  /**
   * If item is `number` then push in stack
   * If item is `-` then pop from stack
   */
  const cases = [
    {input: '5 4 3 2 1 - - - - -', expected: '1 2 3 4 5'},
    {input: '5 - 4 - 3 - 2 - 1 -', expected: '5 4 3 2 1'},
    {input: '1 - -', expected: '1'},
    {input: '5 4 - 3 - -', expected: '4 3 5'},
    {input: '1 2 3 -', expected: '3'},
  ];

  for (const StackImplementation of stackImplementations) {
    describe(`${StackImplementation.name} implementation`, () => {
      for (const {input, expected} of cases) {
        it(`for ${input} returns ${expected}`, () => {
          const stack = new StackImplementation();
          const result = [];
          for (const item of input.split(' ')) {
            if (item === '-') {
              result.push(stack.pop());
            } else {
              stack.push(item);
            }
          }
          expect(result.join(' ').trim()).toBe(expected);
        });
      }
    });
  }
});