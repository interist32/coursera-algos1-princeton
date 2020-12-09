import {LineSegment} from './line-segment';
import {Point} from './point';


export abstract class CollinearPointsBase {
  constructor(public points: Point[]) {}

  numberOfSegments(): number {
    throw new Error('not implemented');
  }

  segments(): LineSegment[] {
    throw new Error('not implemented');
  }
}