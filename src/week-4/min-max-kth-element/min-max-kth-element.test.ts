describe('Min/Max k-th element', () => {
  const tests = [
    {input: [1, 5, 7, 10, -5], k: 2, expectedMin: 1, expectedMax: 7},
    {input: [1, 5, 7, 10, -5], k: 4, expectedMin: 7, expectedMax: 1},
    {input: [1, 10, 12, -5], k: 1, expectedMin: -5, expectedMax: 12},
  ];

  for (const test of tests) {
    it(`Returns ${test.expectedMin} element as ${test.k}-th min element`,
       () => {

       });

    it(`Returns ${test.expectedMax} element as ${test.k}-th max element`,
       () => {

       });
  }
});