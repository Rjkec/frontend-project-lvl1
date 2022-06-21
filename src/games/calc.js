import {
  cons, car, cdr,
} from '@hexlet/pairs';
//import greeting from '../cli.js';
import { randomNumber } from '../ultis.js';
import playLogic from '../engine.js';

const calcGame = () => {
  //const name = greeting();
  console.log('What is the result of the expression?');
  const brainCalc = () => {
    const multiply = () => {
    let multiplyMassive = [];
      for (let i = 0; i < 3; i++) {
        const pair = [randomNumber(),randomNumber()];
        multiplyMassive.push([`${pair[0]} * ${pair[1]}`,`${pair[0] * pair[1]}`]);
      }
      return playLogic(multiplyMassive);
    };

    const plus = () => {
      let plusMassive = [];
      for (let i = 0; i < 3; i++) {
        const pair = [randomNumber(), randomNumber()];
        plusMassive.push([`${pair[0]} + ${pair[1]}`,`${pair[0] + pair[1]}`]);
      }
      return playLogic(plusMassive);
    };

    const minus = () => {
      let minusMassive = [];
      for (let i = 0; i < 3; i++) {
        const pair = [randomNumber(), randomNumber()];
        minusMassive.push([`${pair[0]} - ${pair[1]}`,`${pair[0] - pair[1]}`]);
      }
      return playLogic(minusMassive);
    };
    // const randomPickOperation = () => {
      function getRndInteg(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      const operationNum = getRndInteg(0, 3);//WORKING WITH 

      if (operationNum === 0) {
        return multiply();
      }

      if (operationNum === 1) {
        return plus();
      }

      if (operationNum === 2) {
        return minus();
      }
    //return null; // ADD THIS JUST TO FIX LINTER
    // }
  
  };
  brainCalc();
  //return playLogic(calcGame(),name);
};

export default calcGame;
