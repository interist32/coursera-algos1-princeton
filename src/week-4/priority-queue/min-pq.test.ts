import {MinPQBinaryHeap} from './min-pq-binary-heap';
import {MinPQUnorderedArray} from './min-pq-unordered-array';


describe('Min Priority Queue', () => {
  for (const MaxPQImpl of [MinPQUnorderedArray, MinPQBinaryHeap]) {
    testLibrary(MaxPQImpl);
  }
});

function testLibrary(Library: any) {
  describe(`${Library.name}`, () => {
    let minPQ;

    beforeEach(() => {
      minPQ = new Library();
    });

    it('delMin()', () => {
      minPQ.insert(1);
      minPQ.insert(10);
      expect(minPQ.delMin()).toBe(1);
      expect(minPQ.delMin()).toBe(10);
    });

    it('min()', () => {
      expect(minPQ.min()).toBe(null);
      minPQ.insert(1);
      minPQ.insert(10);
      expect(minPQ.min()).toBe(1);
      minPQ.insert(0);
      expect(minPQ.min()).toBe(0);
      minPQ.insert(-2);
      expect(minPQ.min()).toBe(-2);
      minPQ.delMin();
      expect(minPQ.min()).toBe(0);
    });

    it('size()', () => {
      expect(minPQ.size()).toBe(0);
      minPQ.insert(1);
      minPQ.insert(2);
      expect(minPQ.size()).toBe(2);
      minPQ.delMin();
      minPQ.delMin();
      expect(minPQ.size()).toBe(0);
    });

    it('isEmpty()', () => {
      expect(minPQ.isEmpty()).toBe(true);
      minPQ.insert(1);
      expect(minPQ.isEmpty()).toBe(false);
    });
  });
}