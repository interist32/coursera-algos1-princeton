import {getRandom} from '../../utils/getRandom';
import {swap} from '../../utils/swap';


/**
 * Knuth shuffling algorithm.
 * @param arr
 */
export function shuffle<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    const j = getRandom(0, i);  // [0;i]
    swap(arr, i, j);
  }
  return [...arr];
}