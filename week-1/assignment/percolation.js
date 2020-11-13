const UnionFind = require('../quick-union');

/**
 * Model of percolation system.
 *
 * Corner cases:
 * Row and column indices are integers between 1 and n, where
 * (1,1) is the upper-left side.
 *
 * Performance requirements:
 * - Constructor must take time proportional to n^2
 * - All instance methods must take constant time plus a constant number of
 * calls to `union()` and `find()`.
 */
class Percolation {
  constructor(n) {
    this.grid =
        Array.from({length: n}, () => Array.from({length: n}, () => false));

    // Sites + virtual top + virtual bottom
    this.unionFind = new UnionFind(n * n + 2);

    this.virtualTop = 0;
    this.virtualBottom = n * n + 1;

    this.openSites = 0;
  }

  open(row, col) {
    this.assertNotZero(row);
    this.assertNotZero(col);

    if (this.isOpen(row, col)) return;

    this.grid[row - 1][col - 1] = true;

    const flatSiteIndex = this.flattenSiteIndex(row, col);
    if (row === 1) {
      this.unionFind.union(this.virtualTop, flatSiteIndex);
    }

    if (row === this.grid.length) {
      this.unionFind.union(this.virtualBottom, flatSiteIndex);
    }

    if (this.isInGrid(row - 1, col) && this.isOpen(row - 1, col)) {
      this.unionFind.union(flatSiteIndex, this.flattenSiteIndex(row - 1, col));
    }

    if (this.isInGrid(row + 1, col) && this.isOpen(row + 1, col)) {
      this.unionFind.union(flatSiteIndex, this.flattenSiteIndex(row + 1, col));
    }

    if (this.isInGrid(row, col - 1) && this.isOpen(row, col - 1)) {
      this.unionFind.union(flatSiteIndex, this.flattenSiteIndex(row, col - 1));
    }

    if (this.isInGrid(row, col + 1) && this.isOpen(row, col + 1)) {
      this.unionFind.union(flatSiteIndex, this.flattenSiteIndex(row, col + 1));
    }

    this.openSites++;
  }

  isOpen(row, col) {
    this.assertNotZero(row);
    this.assertNotZero(col);

    return this.grid[row - 1][col - 1];
  }

  isFull(row, col) {
    this.assertNotZero(row);
    this.assertNotZero(col);

    return this.unionFind.connected(
        this.virtualTop, this.flattenSiteIndex(row, col));
  }

  numberOfOpenSites() {
    return this.openSites;
  }

  percolates() {
    return this.unionFind.connected(this.virtualTop, this.virtualBottom);
  }

  assertNotZero(value) {
    if (value === 0) throw new Error('Argument can not be 0');
  }

  flattenSiteIndex(row, col) {
    return (row - 1) * this.grid.length + col;
  }

  isInGrid(row, col) {
    return (row >= 1 && row <= this.grid.length) &&
        (col >= 1 && col <= this.grid.length);
  }
}

module.exports = Percolation;