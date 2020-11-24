import {swap} from '../../utils/swap';


/**
 * Time: O(N^2) in worst case, but O(N) for already sorted or partially sorted
 * arrays
 *
 * Space: O(1)
 * @param arr
 */
export function insertionSort<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
  return [...arr];
}
