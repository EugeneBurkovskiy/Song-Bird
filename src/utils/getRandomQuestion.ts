import { IBird } from '../context/BirdsContext';

const getRandomQuestion = (options: IBird[]) => {
  return options[Math.floor(Math.random() * 6)];
};

export default getRandomQuestion;
