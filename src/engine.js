import readlineSync from 'readline-sync';

const userAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return +answer;// add plus to try with it here
};

const playLogic = (qestion) => {
  const answer = userAnswer();
  if (qestion === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${qestion}`);
  return false;
};

export default playLogic;
