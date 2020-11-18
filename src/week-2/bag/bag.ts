export class Bag<T extends any> implements Iterable<T> {
  private readonly array = [];

  [Symbol.iterator](): Iterator<T, any, undefined> {
    return {
      next: () => {
        if (this.array.length === 0) {
          return {
            value: undefined,
            done: true,
          };
        }

        return {
          value: this.array.shift(),
          done: false,
        };
      },
    };
  }

  add(item: T) {
    this.array.push(item);
  }

  size(): number {
    return this.array.length;
  }
}