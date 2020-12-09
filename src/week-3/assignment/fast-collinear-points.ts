import {CollinearPointsBase} from './collinear-points-base';
import {LineSegment} from './line-segment';


export class FastCollinearPoints extends CollinearPointsBase {
  numberOfSegments(): number {
    throw new Error('not implemented');
  }

  segments(): LineSegment[] {
    throw new Error('not implemented');
  }
}