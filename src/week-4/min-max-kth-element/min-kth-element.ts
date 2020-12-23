import {MaxPQBinaryHeap} from '../priority-queue/max-pq-binary-heap';


export function minKthElement(arr: number[], k: number): number {
  if (k > arr.length) return null;

  const maxPQ = new MaxPQBinaryHeap<number>();

  for (let i = 0; i < arr.length; i++) {
    maxPQ.insert(arr[i]);
    if (maxPQ.size() > k) {
      maxPQ.delMax();
    }
  }
  return maxPQ.delMax();
}