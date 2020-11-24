import {getRandom} from '../../utils/getRandom';
import {insertionSort} from './insertion-sort';
import {selectionSort} from './selection-sort';
import {shellSort} from './shell-sort';


describe('Sorting', () => {
  const inputs =
      [
        1,
        10,
        1000,
        10000,
      ]
          .map(
              (inputSize) => Array.from(
                  {length: inputSize}, () => getRandom(0, inputSize)));

  const algos = [
    selectionSort,
    insertionSort,
    shellSort,
  ];

  for (const algo of algos) {
    for (const input of inputs) {
      it(`${algo.name} algorithm sorts input of size ${input.length}`, () => {
        const result = algo([...input]);
        expect(result).toEqual([...input.sort((a, b) => a - b)]);
      });
    }
  }
});