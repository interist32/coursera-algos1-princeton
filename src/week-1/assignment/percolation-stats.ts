import {getRandom} from '../../utils/getRandom';
import Percolation from './percolation';


export default class PercolationStats {
  private readonly n: number;
  private readonly percolation: Percolation;
  private readonly results: number[];

  constructor(n: number, trials: number) {
    if (n < 1 || trials < 1)
      throw new Error('Arguments should be a positive number');

    this.n = n;

    this.percolation = new Percolation(this.n);
    this.results = [];

    for (let i = 0; i < trials; i++) {
      while (!this.percolation.percolates()) {
        const row = getRandom(1, this.n);
        const column = getRandom(1, this.n);
        this.percolation.open(row, column);
      }


      this.results.push(this.percolation.numberOfOpenSites() / this.n ** 2);
    }
  }

  mean(): number {
    return this.results.reduce((acc, cur) => acc + cur, 0) /
        this.results.length;
  }

  stddev(): number {
    const mean = this.mean();
    // sd = sqrt(sum(x-mean)**2 / N)
    const sum = this.results.map((res) => (res - mean) ** 2)
                    .reduce((acc, cur) => acc + cur, 0);
    return Math.sqrt(sum / this.results.length);
  }

  confidenceLo(): number {
    return this.mean() -
        1.96 * this.stddev() / (Math.sqrt(this.results.length));
  }

  confidenceHi(): number {
    return this.mean() +
        1.96 * this.stddev() / (Math.sqrt(this.results.length));
  }
}