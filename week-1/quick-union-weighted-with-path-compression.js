const QuickUnionWeighted = require('./quick-union-weighted');


class QuickUnionWeightedWithPathCompression extends QuickUnionWeighted {
  constructor(n) {
    super(n);
  }

  getRoot(p) {
    while (p !== this.ids[p]) {
      this.ids[p] = this.ids[this.ids[p]];
      p = this.ids[p];
    }
    return p;
  }
}

module.exports = QuickUnionWeightedWithPathCompression;