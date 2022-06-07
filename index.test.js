const sum = require('./index')

test('sum of 4 + 10 to equal 14', () => {
  expect(sum(4,10)).toBe(14)
})
