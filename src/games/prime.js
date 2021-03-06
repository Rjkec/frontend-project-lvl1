import greeting from '../cli.js';
import playLogic from '../engine.js';
import {
  randomNumber, userAnswerAsString,
} from '../ultis.js';

const primeGame = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const brainPrime = () => {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const answer = userAnswerAsString();

    const isPrime = (num) => {
      if (num === 1) {
        return 'no';
      }
      /* eslint-disable no-plusplus */
      for (let i = 2; i < num; i++) if (num % i === 0) return 'no';
      return 'yes';
    };
    return playLogic(isPrime(number), answer, name);
    // if (isPrime(number) === true) {
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

  //   if (isPrime(number) === false) {
  //     if (answer === 'yes') {
  //       console.log('yes is wrong answer ;(. Correct answer was no');
  //       console.log(`Let's try again, ${name}!`);
  //       return false;
  //     }
  //     if (answer === 'no') {
  //       console.log('Correct!');
  //       return true;
  //     }
  //   }
  //   return null; // ADD THIS JUST TO FIX LINTER
  };

  let i = 0;
  while (i < 3) {
    const result = brainPrime();
    // console.log(result);
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
    // console.log('AAAyes, its happening');
      break;
    // console.log('final i',i);
    }
  }
};
export default primeGame;
