import {MinPQBinaryHeap} from '../priority-queue/min-pq-binary-heap';


export function maxKthElement(arr: number[], k: number): number {
  if (k > arr.length) return null;

  const minPQ = new MinPQBinaryHeap<number>();
  for (let i = 0; i < arr.length; i++) {
    if (minPQ.size() === k) {
      minPQ.delMin();
    } else {
      minPQ.insert(arr[i]);
    }
  }

  return minPQ.delMin();
}