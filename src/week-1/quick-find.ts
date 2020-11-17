import UnionFindBase from './union-find-base';

export default class QuickFind extends UnionFindBase {
  union(p: number, q: number) {
    const pid = this.ids[p];
    const qid = this.ids[q];
    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] === pid) {
        this.ids[i] = qid;
      }
    }
  }

  connected(p: number, q: number) {
    return this.ids[p] === this.ids[q];
  }
}