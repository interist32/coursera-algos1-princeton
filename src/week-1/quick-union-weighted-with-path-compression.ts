import QuickUnionWeighted from './quick-union-weighted';


export default class QuickUnionWeightedWithPathCompression extends
    QuickUnionWeighted {
  protected getRoot(p) {
    while (p !== this.ids[p]) {
      this.ids[p] = this.ids[this.ids[p]];
      p = this.ids[p];
    }
    return p;
  }
}