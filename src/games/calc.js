import {
  cons, car, cdr,
} from '@hexlet/pairs';
import greeting from '../cli.js';
import {
  randomNumber, userAnswer,
} from '../ultis.js';
import playLogic from '../../src/engine.js';
const calcGame = () => {
  const name = greeting();
  console.log('What is the result of the expression?');

  const brainCalc = () => {
    const pair = cons(randomNumber(), randomNumber());
    const multiply = () => {
      console.log(`Question: ${car(pair)} * ${cdr(pair)}`);
      const question = car(pair) * cdr(pair);
      const answer = userAnswer();
      const result = playLogic(question,answer);
      return result;
    };

    const plus = () => {
      console.log(`Question: ${car(pair)} + ${cdr(pair)}`);
      const question = car(pair) + cdr(pair);
      const answer = userAnswer();
      const result = playLogic(question,answer);
      return result;
    };

    const minus = () => {
      console.log(`Question: ${car(pair)} - ${cdr(pair)}`);
      const question = car(pair) - cdr(pair);
      const answer = userAnswer();
      const result = playLogic(question,answer);
      return result;
    };

    function getRndInteg(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    
    const operationNum = getRndInteg(2, 3); //temporery change to (0,2)

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
    //console.log('prove of working func',result);
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
