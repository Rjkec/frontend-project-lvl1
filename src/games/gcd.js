import {
  cons, car, cdr,
} from '@hexlet/pairs';
import greeting from '../cli.js';
import playLogic from '../engine.js';
import {
  randomNumber, userAnswerAsNumber, //FIRST CHANGE OF THS FILE
} from '../ultis.js';

const gcdGame = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  const brainGcd = () => {
    const pair = cons(randomNumber(), randomNumber());
    console.log(`Question: ${car(pair)} ${cdr(pair)}`);
    const answer = userAnswerAsNumber();
    const egcd = (a, b) => {
      if (a === 0) return b;

      while (b !== 0) {
        if (a > b) {
          /* eslint-disable no-param-reassign */
          a -= b;
        } else b -= a;
      }

      return a;
    };
    return playLogic(egcd(car(pair),cdr(pair)),answer)
  };

  let i = 0;
  while (i < 3) {
    const result = brainGcd();
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

export default gcdGame;
