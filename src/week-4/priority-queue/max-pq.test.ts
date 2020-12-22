import {MaxPQBinaryHeap} from './max-pq-binary-heap';
import {MaxPQUnorderedArray} from './max-pq-unordered-array';


describe('Max Priority Queue', () => {
  for (const MaxPQImpl of [MaxPQUnorderedArray, MaxPQBinaryHeap]) {
    testLibrary(MaxPQImpl);
  }
});

function testLibrary(Library: any) {
  describe(`${Library.name}`, () => {
    let maxPQ;

    beforeEach(() => {
      maxPQ = new Library();
    });

    it('delMax()', () => {
      maxPQ.insert(1);
      maxPQ.insert(10);
      expect(maxPQ.delMax()).toBe(10);
      expect(maxPQ.delMax()).toBe(1);
    });

    it('max()', () => {
      expect(maxPQ.max()).toBe(null);
      maxPQ.insert(1);
      maxPQ.insert(10);
      expect(maxPQ.max()).toBe(10);
      maxPQ.insert(8);
      expect(maxPQ.max()).toBe(10);
      maxPQ.insert(32);
      expect(maxPQ.max()).toBe(32);
      maxPQ.delMax();
      expect(maxPQ.max()).toBe(10);
    });

    it('size()', () => {
      expect(maxPQ.size()).toBe(0);
      maxPQ.insert(1);
      maxPQ.insert(2);
      expect(maxPQ.size()).toBe(2);
      maxPQ.delMax();
      maxPQ.delMax();
      expect(maxPQ.size()).toBe(0);
    });

    it('isEmpty()', () => {
      expect(maxPQ.isEmpty()).toBe(true);
      maxPQ.insert(1);
      expect(maxPQ.isEmpty()).toBe(false);
    });
  });
}
