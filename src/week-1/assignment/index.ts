import PercolationStats from './percolation-stats';


const tests = [
  {size: 10, trials: 10},
  {size: 10, trials: 100},
  {size: 10, trials: 1000},
  {size: 10, trials: 10000},

  {size: 100, trials: 10},
  {size: 100, trials: 100},
  {size: 100, trials: 1000},
  {size: 100, trials: 10000},

  {size: 1000, trials: 10},
  {size: 1000, trials: 100},
  {size: 1000, trials: 1000},
  {size: 1000, trials: 10000},
];

console.time('Total time');
for (const {size, trials} of tests) {
  const stats = new PercolationStats(size, trials);
  console.info(`Size: ${size}, trials: ${trials}`);
  console.table({
    mean: stats.mean(),
    stddev: stats.stddev(),
    '95% confidence interval':
        `[${stats.confidenceLo()}, ${stats.confidenceHi()}]`,
  });
}
console.timeEnd('Total time');
