import QuickUnion from './quick-union';


export default class QuickUnionWeighted extends QuickUnion {
  private readonly sizes: number[];

  constructor(n: number) {
    super(n);
    this.sizes = Array.from({length: n}, () => 1);
  }

  union(p: number, q: number) {
    const pRoot = this.getRoot(p);
    const qRoot = this.getRoot(q);
    if (this.sizes[pRoot] > this.sizes[qRoot]) {
      this.ids[qRoot] = pRoot;
      this.sizes[pRoot] += this.sizes[qRoot];
    } else {
      this.ids[pRoot] = qRoot;
      this.sizes[qRoot] += this.sizes[pRoot];
    }
  }
}