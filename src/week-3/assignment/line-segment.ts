import {Point} from './point';


export class LineSegment {
  constructor(public p: Point, public q: Point) {}

  draw() {
    throw new Error('not implemented');
  }

  toString(): string {
    return `${this.p.toString()} -> ${this.q.toString()}`;
  }
}