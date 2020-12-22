export class MinPQUnorderedArray<T> {
  private len = 0;
  private readonly arr: T[] = [];

  insert(item: T) {
    this.arr.push(item);
    this.len++;
  }

  delMin(): T {
    const min = this.min();

    let ind = this.arr.indexOf(min);
    let pointer = 0;
    for (let i = 0; i < this.len; i++) {
      if (i === ind) continue;
      this.arr[pointer] = this.arr[i];
      pointer++;
    }

    this.len--;
    return min;
  }

  isEmpty(): boolean {
    return this.len === 0;
  }

  min(): T|null {
    if (this.size() === 0) return null;

    let min = this.arr[0];
    for (let i = 1; i < this.len; i++) {
      if (this.arr[i] < min) {
        min = this.arr[i];
      }
    }

    return min;
  }

  size(): number {
    return this.len;
  }
}