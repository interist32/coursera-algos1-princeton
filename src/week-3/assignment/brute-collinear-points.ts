import {CollinearPointsBase} from './collinear-points-base';
import {LineSegment} from './line-segment';
import {Point} from './point';


export class BruteCollinearPoints extends CollinearPointsBase {
  private lineSegments: LineSegment[] = [];

  constructor(points: Point[]) {
    super(points);

    this.doWork();
  }

  private doWork() {
    debugger;
    for (let p = 0; p < this.points.length; p++) {
      let min = this.points[p];
      let max = this.points[p];

      for (let q = p + 1; q < this.points.length; q++) {
        if (this.points[p].compareTo(this.points[q]) === 0) {
          throw new Error('Two points can\'t be equal');
        }
        if (this.points[q].compareTo(min) < 0) {
          min = this.points[q];
        }
        if (this.points[q].compareTo(max) > 0) {
          max = this.points[q];
        }

        for (let r = q + 1; r < this.points.length; r++) {
          // Only if P,Q,R on the same line
          if (this.points[p].slopeTo(this.points[q]) ===
              this.points[p].slopeTo(this.points[r])) {
            if (this.points[r].compareTo(min) < 0) {
              min = this.points[r];
            }
            if (this.points[r].compareTo(max) > 0) {
              max = this.points[r];
            }

            for (let s = r + 1; s < this.points.length; s++) {
              if (this.points[p].slopeTo(this.points[q]) ===
                  this.points[p].slopeTo(this.points[s])) {
                if (this.points[s].compareTo(min) < 0) {
                  min = this.points[s];
                }
                if (this.points[s].compareTo(max) > 0) {
                  max = this.points[s];
                }

                if (!this.lineSegments.find(
                        (ls) => ls.p.compareTo(min) === 0 &&
                            ls.q.compareTo(max) === 0)) {
                  this.lineSegments.push(new LineSegment(min, max));
                }
              }
            }
          }
        }
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