class QuickFind {
  constructor(n) {
    this.ids = Array.from({length: n}, (i, ind) => ind);
  }

  union(p, q) {
    const pid = this.ids[p];
    const qid = this.ids[q];
    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] === pid) {
        this.ids[i] = qid;
      }
    }
  }

  connected(p, q) {
    return this.ids[p] === this.ids[q];
  }
}

module.exports = QuickFind;