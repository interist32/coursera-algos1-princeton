/**
 * Time: O(N*log(N))
 * Space: O(N)
 * @param arr
 */
export function mergeSort<T>(arr: T[]) {
  const auxArr = Array.from({length: arr.length});
  sort(arr, auxArr, 0, arr.length - 1);
  return arr;
}


function sort<T>(arr: T[], auxArr: T[], lo: number, hi: number) {
  if (lo >= hi) return;
  const mid = Math.trunc(lo + (hi - lo) / 2);
  sort(arr, auxArr, lo, mid);
  sort(arr, auxArr, mid + 1, hi);
  merge(arr, auxArr, lo, mid, hi);
}


function merge<T>(arr: T[], auxArr: T[], lo: number, mid: number, hi: number) {
  for (let i = lo; i <= hi; i++) {
    auxArr[i] = arr[i];
  }

  let i = lo, j = mid + 1;
  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      arr[k] = auxArr[j++];
    } else if (j > hi) {
      arr[k] = auxArr[i++];
    } else if (auxArr[i] < auxArr[j]) {
      arr[k] = auxArr[i++];
    } else {
      arr[k] = auxArr[j++];
    }
  }
}