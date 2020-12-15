export function mergeSortBottomUp<T>(arr: T[]) {
  for (let sz = 1; sz < arr.length; sz *= 2) {
    for (let lo = 0; lo < arr.length - sz; lo += sz * 2) {
      const hi = Math.min(lo + sz * 2 - 1, arr.length - 1);
      const mid = lo + sz - 1;
      merge(arr, lo, mid, hi);
    }
  }
  return arr;
}

function merge<T>(arr: T[], lo: number, mid: number, hi: number) {
  const auxArr: T[] = Array.from({length: arr.length});
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