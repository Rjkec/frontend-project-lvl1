import {
  cons, car, cdr,
} from '@hexlet/pairs';
import greeting from '../cli.js';
import { randomNumber, userAnswerAsNumber } from '../ultis.js';
import playLogic from '../engine.js';

const calcGame = () => {
  const name = greeting();
  console.log('What is the result of the expression?');
  const brainCalc = () => {
    const multiply = () => {
    let multiplyMassive = [];
      for (let i = 0; i < 3; i++) {
        const pair = cons(randomNumber(), randomNumber());
        multiplyMassive.push([`${car(pair)} * ${cdr(pair)}`,car(pair) * cdr(pair)]);
      }
      return playLogic(multiplyMassive,name);
    }; 

    const plus = () => {
      let plusMassive = [];
      for (let i = 0; i < 3; i++) {
        const pair = cons(randomNumber(), randomNumber());
        plusMassive.push([`${car(pair)} + ${cdr(pair)}`,car(pair) + cdr(pair)]);
      }
      return playLogic(plusMassive,name);
    };

    const minus = () => {
      let minusMassive = [];
      for (let i = 0; i < 3; i++) {
        const pair = cons(randomNumber(), randomNumber());
        minusMassive.push([`${car(pair)} - ${cdr(pair)}`,car(pair) - cdr(pair)]);
      }
      return playLogic(minusMassive,name);
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
  brainCalc()
  //return playLogic(calcGame(),name);
};

export default calcGame;



//////////////////////////////OLD VERSION OF CODE///////////////////////


// import {
//   cons, car, cdr,
// } from '@hexlet/pairs';
// import greeting from '../cli.js';
// import { randomNumber, userAnswerAsNumber } from '../ultis.js';
// import playLogic from '../engine.js';

// const calcGame = () => {
//   const name = greeting();
//   console.log('What is the result of the expression?');

//   const brainCalc = () => {
//     const pair = cons(randomNumber(), randomNumber());
//     const multiply = () => {
//       console.log(`Question: ${car(pair)} * ${cdr(pair)}`);
//       const answer = userAnswerAsNumber();
//       return playLogic(car(pair) * cdr(pair), answer, name);
//     };

//     const plus = () => {
//       console.log(`Question: ${car(pair)} + ${cdr(pair)}`);
//       const answer = userAnswerAsNumber();
//       return playLogic(car(pair) + cdr(pair), answer, name);
//     };

//     const minus = () => {
//       console.log(`Question: ${car(pair)} - ${cdr(pair)}`);
//       const answer = userAnswerAsNumber();
//       return playLogic(car(pair) - cdr(pair), answer, name);
//     };

//     function getRndInteg(min, max) {
//       return Math.floor(Math.random() * (max - min)) + min;
//     }

//     const operationNum = getRndInteg(0, 3);

//     if (operationNum === 0) {
//       return multiply();
//     }

//     if (operationNum === 1) {
//       return plus();
//     }

//     if (operationNum === 2) {
//       return minus();
//     }

//     return null; // ADD THIS JUST TO FIX LINTER
//   };

//   let i = 0;
//   while (i < 3) {
//     const result = brainCalc();
//     // console.log('prove of working func',result);
//     // console.log('counter',i);
//     if (result === true) {
//       /* eslint-disable no-plusplus */
//       i++;
//       // console.log('counter++',i);
//       // continue;
//       if (i === 3) {
//         console.log(`Congratulations, ${name}!`);
//       }
//     }

//     if (result === false) {
//       // console.log('AAAyes, its happening');
//       break;
//       // console.log('final i',i);
//     }
//   }
// };
// export default calcGame;
