const Percolation = require('./percolation');


class PercolationStats {
  constructor(n, trials) {
    if (n < 1 || trials < 1)
      throw new Error('Arguments should be a positive number');

    this.n = n;

    this.percolation = new Percolation(this.n);
    this.results = [];

    for (let i = 0; i < trials; i++) {
      while (!this.percolation.percolates()) {
        const row = this.getRandomInt(1, this.n);
        const column = this.getRandomInt(1, this.n);
        this.percolation.open(row, column);
      }


      this.results.push(this.percolation.numberOfOpenSites() / this.n ** 2);
    }
  }

  mean() {
    return this.results.reduce((acc, cur) => acc + cur, 0) /
        this.results.length;
  }

  stddev() {
    const mean = this.mean();
    // sd = sqrt(sum(x-mean)**2 / N)
    const sum = this.results.map((res) => (res - mean) ** 2)
                    .reduce((acc, cur) => acc + cur, 0);
    return Math.sqrt(sum / this.results.length);
  }

  confidenceLo() {
    return this.mean() -
        1.96 * this.stddev() / (Math.sqrt(this.results.length));
  }

  confidenceHi() {
    return this.mean() +
        1.96 * this.stddev() / (Math.sqrt(this.results.length));
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

module.exports = PercolationStats;