import {MinPQBinaryHeap} from '../priority-queue/min-pq-binary-heap';


export function maxKthElement(arr: number[], k: number): number {
  if (k > arr.length) return null;

  const minPQ = new MinPQBinaryHeap<number>();
  for (let i = 0; i < arr.length; i++) {
    minPQ.insert(arr[i]);
    if (minPQ.size() > k) {
      minPQ.delMin();
    }
  }

  return minPQ.delMin();
}