import {shuffle} from './shuffling';


describe('Khuth shuffle algorithm', () => {
  it('shuffles uniformly at random', () => {
    const input = Array.from({length: 1000}, (v, ind) => ind + 1);
    expect(shuffle([...input])).not.toEqual([...input]);
  });
});