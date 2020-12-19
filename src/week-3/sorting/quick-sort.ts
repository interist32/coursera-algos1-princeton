import {swap} from '../../utils/swap';
import {shuffle} from '../../week-2/shuffling/shuffling';


export function quickSort<T>(arr: T[]) {
  sort(arr, 0, arr.length - 1);
  return arr;
}

export function quickSortWithShuffling<T>(arr: T[]) {
  shuffle(arr);
  sort(arr, 0, arr.length - 1);
  return arr;
}

function sort<T>(arr: T[], lo: number, hi: number) {
  if (lo < hi) {
    const p = partition(arr, lo, hi);
    sort(arr, lo, p - 1);
    sort(arr, p + 1, hi);
  }
}

function partition<T>(arr: T[], lo: number, hi: number) {
  const pivot = arr[lo];
  let i = lo;
  let j = hi + 1;

  while (i < j) {
    do {
      i++;
    } while (arr[i] <= pivot);
    do {
      j--;
    } while (arr[j] > pivot);

    if (i < j) {
      swap(arr, i, j);
    }
  }

  swap(arr, lo, j);

  return j;
}