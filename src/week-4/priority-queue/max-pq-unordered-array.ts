export class MaxPQ<T> {
  private len = 0;
  private readonly arr: T[] = [];

  insert(item: T) {
    this.arr.push(item);
    this.len++;
  }

  delMax(): T {
    const max = this.max();

    let ind = this.arr.indexOf(max);
    let pointer = 0;
    for (let i = 0; i < this.len; i++) {
      if (i === ind) continue;
      this.arr[pointer] = this.arr[i];
      pointer++;
    }

    this.len--;
    return max;
  }

  isEmpty(): boolean {
    return this.len === 0;
  }

  max(): T|null {
    if (this.size() === 0) return null;

    let max = this.arr[0];
    for (let i = 1; i < this.len; i++) {
      if (this.arr[i] > max) {
        max = this.arr[i];
      }
    }

    return max;
  }

  size(): number {
    return this.len;
  }
}