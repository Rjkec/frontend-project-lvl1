import greeting from '../cli.js';
import playLogic from '../engine.js';
import { userQuestion, userAnswerAsString } from '../ultis.js';

const evenGame = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const brainEven = () => {
    const number = userQuestion();
    const answer = userAnswerAsString();
    return playLogic(number % 2 === 0 ? 'yes' : 'no', answer); // add new solution
    // if (number % 2 === 0) {
    //   if (answer === 'yes') {
    //     console.log('Correct!');
    //     return true;
    //   }
    //   if (answer === 'no') {
    //     console.log('no is wrong answer ;(. Correct answer was yes');
    //     console.log(`Let's try again, ${name}!`);
    //     return false;
    //   }
    // }
    // if (number % 2 !== 0) {
    //   if (answer === 'yes') {
    //     console.log('yes is wrong answer ;(. Correct answer was no');
    //     console.log(`Let's try again, ${name}!`);
    //     return false;
    //   }
    //   if (answer === 'no') {
    //     console.log('Correct!');
    //     return true;
    //   }
    // }
    // console.log(`Let's try again, ${name}!`);
    // return false;
  };

  let i = 0;
  while (i < 3) {
    const result = brainEven();
    // console.log('counter',i);
    if (result === true) {
    /* eslint-disable no-plusplus */
      i++;
      // console.log('counter++',i);
      // continue;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    }

    if (result === false) {
    // console.log('yes, its happening');
      break;
    // console.log('final i',i);
    }
  }
};
export default evenGame;
