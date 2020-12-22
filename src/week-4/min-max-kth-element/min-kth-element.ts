import {MaxPQBinaryHeap} from '../priority-queue/max-pq-binary-heap';


export function minKthElement(arr: number[], k: number): number {
  if (k > arr.length) return null;

  const maxPQ = new MaxPQBinaryHeap<number>();

  for (let i = 0; i < arr.length; i++) {
    if (maxPQ.size() === k) {
      maxPQ.delMax();
    } else {
      maxPQ.insert(arr[i]);
    }
  }
  return maxPQ.delMax();
}