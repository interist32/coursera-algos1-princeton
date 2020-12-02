import {getRandom} from '../../utils/getRandom';
import {mergeSort} from './merge-sort';
import {mergeSortBottomUp} from './merge-sort-bottom-up';


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
    mergeSort,
    mergeSortBottomUp,
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