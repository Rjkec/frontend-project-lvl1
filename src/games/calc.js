import {
  cons, car, cdr,
} from '@hexlet/pairs';
import greeting from '../cli.js';
import {
  randomNumber, userAnswer,
} from '../ultis.js';

const calcGame = () => {
  const name = greeting();
  console.log('What is the result of the expression?');

  const brainCalc = () => {
    const multiply = () => {
      const pair = cons(randomNumber(), randomNumber());
      console.log(`Question: ${car(pair)} * ${cdr(pair)}`);
      const answer = +userAnswer();

      if (car(pair) * cdr(pair) === answer) {
        console.log('Correct!');
        return true;
      }
      if (car(pair) * cdr(pair) !== answer) {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${car(pair) * cdr(pair)}`);
        console.log(`Let's try again, ${name}!`);
        return false;
      }
      return null; // ADD THIS JUST TO FIX LINTER
    };

    const plus = () => {
      const pair = cons(randomNumber(), randomNumber());
      console.log(`Question: ${car(pair)} + ${cdr(pair)}`);
      const answer = +userAnswer();

      if (car(pair) + cdr(pair) === answer) {
        console.log('Correct!');
        return true;
      }

      if (car(pair) + cdr(pair) !== answer) {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${car(pair) + cdr(pair)}`);
        console.log(`Let's try again, ${name}!`);
        return false;
      }
      return null; // ADD THIS JUST TO FIX LINTER
    };

    const minus = () => {
      const pair = cons(randomNumber(), randomNumber());
      console.log(`Question: ${car(pair)} - ${cdr(pair)}`);
      const answer = +userAnswer();

      if (car(pair) - cdr(pair) === answer) {
        console.log('Correct!');
        return true;
      }

      if (car(pair) - cdr(pair) !== answer) {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${car(pair) - cdr(pair)}`);
        console.log(`Let's try again, ${name}!`);
        return false;
      }
      return null; // ADD THIS JUST TO FIX LINTER
    };

    function getRndInteg(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    const randomNum = () => {
      const number = getRndInteg(0, 3);
      return number;
    };

    const operationNum = randomNum();

    if (operationNum === 0) {
      return multiply();
    }

    if (operationNum === 1) {
      return plus();
    }

    if (operationNum === 2) {
      return minus();
    }

    return null; // ADD THIS JUST TO FIX LINTER
  };

  let i = 0;
  while (i < 3) {
    const result = brainCalc();
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
export default calcGame;
