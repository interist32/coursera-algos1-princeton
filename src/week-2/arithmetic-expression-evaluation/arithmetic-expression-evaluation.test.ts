import {evaluateExpression} from './arithmetic-expression-evaluation';


describe('Dijkstra\'s two stacks algorithm', () => {
  const testCases = [
    {input: '(1+((2+3)*(4*5)))', result: 101},
    {input: '((1+3)*(4-2))', result: 8},
  ];

  for (const {input, result} of testCases) {
    it(`evaluates ${input} to ${result}`, () => {
      expect(evaluateExpression(input)).toBe(result);
    });
  }
});