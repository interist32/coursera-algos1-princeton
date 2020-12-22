import {MinBinaryHeap} from './min-binary-heap';


describe('MinBinaryHeap', () => {
  it('works as expected', () => {
    const maxHeap = new MinBinaryHeap();
    maxHeap.insert(10);
    expect(maxHeap.getArrCopy()).toEqual([10]);
    maxHeap.insert(9);
    expect(maxHeap.getArrCopy()).toEqual([9, 10]);
    maxHeap.insert(8);
    expect(maxHeap.getArrCopy()).toEqual([8, 10, 9]);
    maxHeap.insert(15);
    expect(maxHeap.getArrCopy()).toEqual([8, 10, 9, 15]);

    // Removing
    expect(maxHeap.removeMin()).toBe(8);
    expect(maxHeap.getArrCopy()).toEqual([9, 10, 15]);
    expect(maxHeap.removeMin()).toBe(9);
    expect(maxHeap.getArrCopy()).toEqual([10, 15]);
    expect(maxHeap.removeMin()).toBe(10);
    expect(maxHeap.getArrCopy()).toEqual([15]);
    expect(maxHeap.removeMin()).toBe(15);
    expect(maxHeap.getArrCopy()).toEqual([]);
  });
});