import {Bag} from './bag';


describe('Bag test', () => {
  const inputs = [
    [10, '20', 'asd', true, false, null],
    [0, 1, 2, 3, 4],
  ];

  for (const input of inputs) {
    let bag: Bag<any>;

    beforeEach(() => {
      bag = new Bag();
      input.forEach(item => bag.add(item));
    });

    it('works with iterator', () => {
      const iterator = bag[Symbol.iterator]();
      for (const item of input) {
        expect(iterator.next()).toEqual({done: false, value: item});
      }
      expect(iterator.next()).toEqual({done: true, value: undefined});
    });

    it('works as iterable data structure', () => {
      expect([...bag]).toEqual(input);
    });

    it('works as iterable data structure with `for .. of`', () => {
      const res = [];
      for (const item of bag) {
        res.push(item);
      }
      expect([...res]).toEqual(input);
    });
  }
});