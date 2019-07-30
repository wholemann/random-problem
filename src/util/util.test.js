import {randInt} from './util';

test('randInt', () => {
  for(let i=0; i < 100; i++){
    expect(randInt(10) < 10).toBe(true);
  }
});