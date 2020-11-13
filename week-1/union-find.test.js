const testLibrary = require('./test-helper');
const QuickFind = require('./quick-find');
const QuickUnion = require('./quick-union');
const QuickUnionWeighted = require('./quick-union-weighted');
const QuickUnionWeightedWithPathCompression =
    require('./quick-union-weighted-with-path-compression');


describe('Union Find libraries', () => {
  for (const library
           of [QuickFind,
               QuickUnion,
               QuickUnionWeighted,
               QuickUnionWeightedWithPathCompression,
  ]) {
    it(`${library.name} works properly`, () => {
      testLibrary(library);
    });
  }
});