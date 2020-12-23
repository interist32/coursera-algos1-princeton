import {swap} from '../../utils/swap';


export class HeapSort<T> {
  constructor(private readonly arr: T[]) {
    this.buildHeap();
    this.sort();
  }

  private buildHeap() {
    let i = Math.trunc((this.arr.length - 1) / 2);

    while (i >= 0) {
      this.sink(i--, this.arr.length - 1);
    }
  }

  private sort() {
    let i = this.arr.length - 1;
    while (i > 0) {
      swap(this.arr, 0, i);
      this.sink(0, --i);
    }
  }

  private sink(i: number, endIndex: number) {
    while (i < endIndex) {
      let j = i * 2 + 1;

      if (j < endIndex && this.arr[j] < this.arr[j + 1]) {
        j++;
      }

      if (j > endIndex) break;

      if (this.arr[i] > this.arr[j]) {
        break;
      }

      swap(this.arr, i, j);
      i = j;
    }
  }
}