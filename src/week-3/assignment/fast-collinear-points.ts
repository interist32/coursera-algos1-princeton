import {CollinearPointsBase} from './collinear-points-base';
import {LineSegment} from './line-segment';
import {Point} from './point';


export class FastCollinearPoints extends CollinearPointsBase {
  private lineSegments: LineSegment[] = [];
  private lineSegmentsSet = new Set();

  constructor(points: Point[]) {
    super(points);

    this.doWork();
  }

  private doWork() {
    for (let p = 0; p < this.points.length; p++) {
      const tmpPoints = [...this.points];
      tmpPoints.sort(this.points[p].slopeOrder());


      // Start with index 1 since the `p` is always first.
      const point = this.points[p];
      const equalSlopesPoints: Point[] = [];
      for (let i = 2; i < tmpPoints.length; i++) {
        if (point.slopeTo(tmpPoints[i]) === point.slopeTo(tmpPoints[i - 1])) {
          equalSlopesPoints.push(tmpPoints[i]);
          equalSlopesPoints.push(tmpPoints[i - 1]);
        }
      }

      if (equalSlopesPoints.length < 3) continue;

      equalSlopesPoints.push(point);
      let min = equalSlopesPoints[0];
      let max = equalSlopesPoints[0];

      for (const point of equalSlopesPoints) {
        if (point.compareTo(max) > 0) {
          max = point;
        }
        if (point.compareTo(min) < 0) {
          min = point;
        }
      }

      const lineSegment = new LineSegment(min, max);
      if (!this.lineSegmentsSet.has(lineSegment.toString())) {
        this.lineSegments.push(lineSegment);
        this.lineSegmentsSet.add(lineSegment.toString());
      }
    }
  }

  numberOfSegments(): number {
    return this.lineSegments.length;
  }

  segments(): LineSegment[] {
    return this.lineSegments;
  }
}