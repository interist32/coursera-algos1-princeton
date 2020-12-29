import {BST, BSTNode} from './binary-search-tree';

describe('BST', () => {
  describe('add()', () => {
    it('works properly', () => {
      const orderedItems = [10, 7, 12, 14, 8, 11, 13];
      const bst = makeTreeFromArray(orderedItems);

      expect(bst.inorderView()).toEqual([7, 8, 10, 11, 12, 13, 14]);
    });
  });

  describe('has()', () => {
    it('works properly', () => {
      const orderedItems = [10, 7, 12, 14, 8, 11, 13];
      const bst = makeTreeFromArray(orderedItems);

      for (const item of orderedItems) {
        expect(bst.has(item)).toBe(true);
      }

      expect(bst.has(-1)).toBe(false);
      expect(bst.has(200)).toBe(false);
      expect(bst.has(5)).toBe(false);
    });
  });

  describe('min()', () => {
    it('works properly', () => {
      const orderedItems = [10, 7, 12, 14, 8, 11, 13];
      const bst = makeTreeFromArray(orderedItems);

      expect(bst.max().value).toBe(14);
    });
  });

  describe('max()', () => {
    it('works properly', () => {
      const orderedItems = [10, 7, 12, 14, 8, 11, 13];
      const bst = makeTreeFromArray(orderedItems);

      expect(bst.min().value).toBe(7);
    });
  });

  describe('remove()', () => {
    it('works properly when removing node with 1 left child', () => {
      const orderedItems = [10, 7, 12, 14, 8, 11, 13];
      const bst = makeTreeFromArray(orderedItems);

      bst.remove(14);
      expect(bst.inorderView()).toEqual([7, 8, 10, 11, 12, 13]);
    });

    it('works properly when removing node with 1 right child', () => {
      const orderedItems = [10, 7, 12, 14, 8, 11, 13];
      const bst = makeTreeFromArray(orderedItems);

      bst.remove(7);
      expect(bst.inorderView()).toEqual([8, 10, 11, 12, 13, 14]);
    });

    it('works properly when removing node with 2 children', () => {
      const orderedItems = [10, 7, 12, 14, 8, 11, 13];
      const bst = makeTreeFromArray(orderedItems);

      bst.remove(12);
      expect(bst.inorderView()).toEqual([7, 8, 10, 11, 13, 14]);
    });
  });

  function makeTreeFromArray(items: number[]): BST {
    const root = new BST(items[0]);
    for (const item of items.slice(1)) {
      root.add(item);
    }
    return root;
  }
});