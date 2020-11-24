import {swap} from '../../utils/swap';


/**
 * Time: O(N^2)
 * Space: O(1)
 * @param arr
 */
export function selectionSort<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
  return [...arr];
}