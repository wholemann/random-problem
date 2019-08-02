import { getTitle, addProblem } from './problem';

test('getTitle', () => {
  const titles = [
    'Twitter problem',
    'YouTube problem',
  ];

  titles.forEach((title) => {
    addProblem(title);
  });

  const title = getTitle();

  expect(titles).toContain(title);
});
