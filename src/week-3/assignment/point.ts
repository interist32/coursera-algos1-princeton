export class Point {
  constructor(
      public x: number,
      public y: number,
  ) {}

  draw(): void {
    throw new Error('not implemented');
  }

  drawTo(): void {
    throw new Error('not implemented');
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  compareTo(point: Point): number {
    if (this.y === point.y && this.x === point.x) return 0;
    if ((this.y < point.y) || (this.y === point.y && this.x < point.x)) {
      return -1;
    }
    return 1;
  }

  slopeTo(point: Point): number {
    if (this.y === point.y && this.x === point.x) return -Infinity;
    if (this.y === point.y) return 0;
    if (this.x === point.x) return Infinity;

    return (point.y - this.y) / (point.x - this.x);
  }

  slopeOrder() {
    return (a: Point, b: Point) => this.slopeTo(a) - this.slopeTo(b);
  }
}