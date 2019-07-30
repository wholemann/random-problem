import {randInt} from '../util/util';

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
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(item => {
    addProblem(item.title);
  });
};
