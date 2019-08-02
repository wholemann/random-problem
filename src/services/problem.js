import { randInt } from '../util/util';

const PROBLEMS_URL = 'https://spreadsheets.google.com/feeds/list/1tT8Mv43LzCdJSh_nREbAXvBTjFlUL8Vl0zLewhaJpu4/od6/public/values?alt=json';

const state = {
  problems: [],
};

export const getTitle = () => {
  const index = randInt(state.problems.length);
  return state.problems[index];
};

export const addProblem = (title) => {
  state.problems.push(title);
};

export const loadProblems = async () => {
  const response = await fetch(PROBLEMS_URL);
  const data = await response.json();
  const { feed: { entry: items } } = data;
  items.forEach(item => {
    const { gsx$title: { $t: title } } = item;
    addProblem(title);
  });
};
