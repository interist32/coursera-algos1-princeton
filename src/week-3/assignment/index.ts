// Client

import {BruteCollinearPoints} from './brute-collinear-points';
import {FastCollinearPoints} from './fast-collinear-points';
import {Point} from './point';

const brutePoints = [
  [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 1],
  ],
  [
    [10000, 0],
    [0, 10000],
    [3000, 7000],
    [7000, 3000],
    [20000, 21000],
    [3000, 4000],
    [14000, 15000],
    [6000, 7000],
  ],
].map((pairs) => pairs.map((pair) => new Point(pair[0], pair[1])));

console.log('Brute Collinear Points');
for (const points of brutePoints) {
  console.log(`${points.length} points:`);
  const bcp = new BruteCollinearPoints(points);
  for (const segment of bcp.segments()) {
    console.log(segment.toString());
  }
}

const fastPoints = [
  [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 1],
  ],
  [
    [19000, 10000],
    [18000, 10000],
    [32000, 10000],
    [21000, 10000],
    [1234, 5678],
    [14000, 10000],
  ],
  [
    [10000, 0],
    [0, 10000],
    [3000, 7000],
    [7000, 3000],
    [20000, 21000],
    [3000, 4000],
    [14000, 15000],
    [6000, 7000],
  ],
].map((pairs) => pairs.map((pair) => new Point(pair[0], pair[1])));

console.log('Fast Collinear Points');
for (const points of fastPoints) {
  console.log(`${points.length} points:`);
  const fcp = new FastCollinearPoints(points);
  for (const segment of fcp.segments()) {
    console.log(segment.toString());
  }
}