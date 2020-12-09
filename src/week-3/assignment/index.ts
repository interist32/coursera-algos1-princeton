// Client

import {BruteCollinearPoints} from './brute-collinear-points';
import {CollinearPointsBase} from './collinear-points-base';
import {FastCollinearPoints} from './fast-collinear-points';
import {Point} from './point';

const points = [
  [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
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

const collinearPointsImplementations = [
  BruteCollinearPoints,
  //   FastCollinearPoints,
];


for (const CollinearPoints of collinearPointsImplementations) {
  console.log(`*** ${CollinearPoints.name} ***`);
  for (const pts of points) {
    console.log(`*** size of ${pts.length} points ***`)
    const collinear = new CollinearPoints(pts);
    for (const segment of collinear.segments()) {
      console.log(segment.toString());
    }
  }
}