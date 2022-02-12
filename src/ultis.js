import readlineSync from 'readline-sync';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const randomNumber = () => {
  const number = getRndInteger(1, 10);
  return number;
};

export const userAnswerAsNumber = () => {
  const answer = readlineSync.question('Your answer: ');
  return +answer;// add plus to try with it here
};
export const userAnswerAsString = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
