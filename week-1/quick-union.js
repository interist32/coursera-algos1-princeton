class QuickUnion {
  constructor(n) {
    this.ids = Array.from({length: n}, (i, ind) => ind);
  }

  union(p, q) {
    const pRoot = this.getRoot(p);
    const qRoot = this.getRoot(q);
    this.ids[pRoot] = qRoot;
  }

  getRoot(p) {
    while (p !== this.ids[p]) {
      p = this.ids[p];
    }
    return p;
  }

  connected(p, q) {
    return this.getRoot(p) === this.getRoot(q);
  }
}

module.exports = QuickUnion;