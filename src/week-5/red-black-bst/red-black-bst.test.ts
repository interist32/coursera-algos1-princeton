import {RedBlackBST} from './red-black-bst';


describe('Red-Black Binary Search Tree', () => {
  describe('add()/get()', () => {
    it('works properly on simple example', () => {
      const rbBst = new RedBlackBST();
      [1, 2, 3].forEach((x) => rbBst.add(x));

      expect(rbBst.getLevelOrderValues()).toEqual([2, 1, 3]);
    });

    it('works properly on complex example', () => {
      const input = 'SEARCHXMPL'.split('').map(x => x.charCodeAt(0));
      const expected = 'MERCLPXAHS'.split('').map(x => x.charCodeAt(0));
      const rbBst = new RedBlackBST();
      input.forEach((x) => rbBst.add(x));

      expect(rbBst.getLevelOrderValues()).toEqual(expected);

      input.forEach((x) => {
        expect(rbBst.get(x).value).toBe(x);
      });
    });
  });
});