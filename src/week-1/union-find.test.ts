import QuickFind from './quick-find';
import QuickUnion from './quick-union';
import QuickUnionWeighted from './quick-union-weighted';
import QuickUnionWeightedWithPathCompression from './quick-union-weighted-with-path-compression';
import testLibrary from './test-helper';


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