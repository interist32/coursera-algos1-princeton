import UnionFindBase from './union-find-base';


export default class QuickUnion extends UnionFindBase {
  union(p: number, q: number) {
    const pRoot = this.getRoot(p);
    const qRoot = this.getRoot(q);
    this.ids[pRoot] = qRoot;
  }

  connected(p: number, q: number): boolean {
    return this.getRoot(p) === this.getRoot(q);
  }

  protected getRoot(p) {
    while (p !== this.ids[p]) {
      p = this.ids[p];
    }
    return p;
  }
}