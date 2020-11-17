export default abstract class UnionFindBase {
  protected readonly ids: number[];

  constructor(n: number) {
    this.ids = Array.from({length: n}, (i, ind) => ind);
  }

  union(p: number, q: number) {
    throw new Error('not implemented');
  }

  connected(p: number, q: number): boolean {
    throw new Error('not implemented');
  }
}