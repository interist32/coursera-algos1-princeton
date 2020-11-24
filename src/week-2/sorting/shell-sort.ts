import {swap} from '../../utils/swap';


/**
 * The main idea is to use `insertionSort` which iterates over the certain `h`
 * step instead of one-by-one. It's necessary to repeat it until `h>=1` and
 * reduce `h` after each iteration dividing by 3.
 * As a result we got:
 * 1. Smaller arrays to operate on.
 * 2. When `h=1` the entire array is partially (an almost) ordered.
 * @param arr
 */
export function shellSort<T>(arr: T[]): T[] {
  let h = getMaxH(arr.length);

  while (h >= 1) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + h; j < arr.length; j = j - h) {
        if (arr[j] < arr[j - h]) {
          swap(arr, j, j - h);
        } else {
          break;
        }
      }
    }

    h = Math.trunc(h / 3);
  }

  return [...arr];
}


function getMaxH(arrLen: number) {
  const max = Math.trunc(arrLen / 3);
  let h = 1;

  while (h < max) {
    h = h * 3 + 1;
  }
  return h;
}