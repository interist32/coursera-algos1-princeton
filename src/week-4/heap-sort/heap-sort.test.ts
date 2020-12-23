import {getRandom} from '../../utils/getRandom';
import {HeapSort} from './heap-sort';


describe('Heap sort', () => {
  const inputs =
      [
        1,
        10,
        100,
        1000,
        10000,
      ]
          .map(
              (inputSize) => Array.from(
                  {length: inputSize}, () => getRandom(0, inputSize)));

  for (const input of inputs) {
    it(`sorts ${input.length} elements properly`, () => {
      const inputCopy1 = [...input];
      const inputCopy2 = [...input];

      inputCopy1.sort((a, b) => a - b);
      new HeapSort(inputCopy2);
      expect(inputCopy1).toEqual(inputCopy2);
    });
  }
});