import { randInt } from './util';

test('randInt', () => {
  const NUMBER = 10;

  [...Array(NUMBER * 10)].forEach(() => {
    expect(randInt(NUMBER)).toBeLessThan(NUMBER);
  });
});
