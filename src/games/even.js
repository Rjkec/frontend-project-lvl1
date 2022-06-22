import playLogic from '../engine.js';
import {randomNumber } from '../ultis.js';

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const brainEven = () => {
    let evenMassive = [];
    for (let i = 0; i < 3; i++) {
      let number = randomNumber();
      evenMassive.push([number,number % 2 === 0 ? 'yes' : 'no']);
    }
    return playLogic(evenMassive); // add new solution
  };

  brainEven();
};

export default evenGame;
