const QuickUnion = require('./quick-union');


class QuickUnionWeighted extends QuickUnion {
  constructor(n) {
    super(n);
    this.sizes = Array.from({length: n}, () => 1);
  }

  union(p, q) {
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

module.exports = QuickUnionWeighted;