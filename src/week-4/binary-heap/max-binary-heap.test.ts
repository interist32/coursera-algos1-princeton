import {MaxBinaryHeap} from './max-binary-heap';


describe('MaxBinaryHeap', () => {
  it('wors as expected', () => {
    const maxHeap = new MaxBinaryHeap();
    maxHeap.insert(10);
    expect(maxHeap.getArrCopy()).toEqual([10]);
    maxHeap.insert(9);
    expect(maxHeap.getArrCopy()).toEqual([10, 9]);
    maxHeap.insert(8);
    expect(maxHeap.getArrCopy()).toEqual([10, 9, 8]);
    maxHeap.insert(15);
    expect(maxHeap.getArrCopy()).toEqual([15, 10, 8, 9]);
    debugger;
    // Removing
    expect(maxHeap.removeMax()).toBe(15);
    expect(maxHeap.getArrCopy()).toEqual([10, 9, 8]);
    expect(maxHeap.removeMax()).toBe(10);
    expect(maxHeap.getArrCopy()).toEqual([9, 8]);
    expect(maxHeap.removeMax()).toBe(9);
    expect(maxHeap.getArrCopy()).toEqual([8]);
    expect(maxHeap.removeMax()).toBe(8);
    expect(maxHeap.getArrCopy()).toEqual([]);
  });
});