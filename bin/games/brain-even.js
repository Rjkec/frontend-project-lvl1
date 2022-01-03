#!/usr/bin/env node
import { hi } from '../../src/cli.js';
import { userQuestion, userAnswer } from '../../src/index.js';

const name = hi();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const brainEven = () => {
  const number = userQuestion();
  const answer = userAnswer();

  if (number % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      return true;
    }
    if (answer === 'no') {
      console.log('no is wrong answer ;(. Correct answer was yes');
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  if (number % 2 !== 0) {
    if (answer === 'yes') {
      console.log('yes is wrong answer ;(. Correct answer was no');
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    if (answer === 'no') {
      console.log('Correct!');
      return true;
    }
  }
  console.log(`Let's try again, ${name}!`);
  return false;
};

let i = 0;
while (i < 3) {
  const result = brainEven();
  // console.log('counter',i);
  if (result === true) {
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
