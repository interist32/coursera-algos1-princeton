import {maxKthElement} from './max-kth-element';
import {minKthElement} from './min-kth-element';


describe('Min/Max k-th element', () => {
  const tests = [
    {input: [1, 5, 7, 10, -5], k: 2, expectedMin: 1, expectedMax: 7},
    {input: [1, 5, 7, 10, -5], k: 4, expectedMin: 7, expectedMax: 1},
    {input: [1, 10, 12, -5], k: 1, expectedMin: -5, expectedMax: 12},
  ];

  for (const {input, k, expectedMin, expectedMax} of tests) {
    it(`Returns ${expectedMin} element as ${k}-th min element`, () => {
      expect(minKthElement(input, k)).toBe(expectedMin);
    });

    it(`Returns ${expectedMax} element as ${k}-th max element`, () => {
      expect(maxKthElement(input, k)).toBe(expectedMax);
    });
  }
});