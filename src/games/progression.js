import greeting from '../cli.js';
import playLogic from '../engine.js';
import {
  randomNumber, userAnswerAsNumber,
} from '../ultis.js';

const progressionGame = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');

  const brainProgression = () => {
    const stepOfProgression = randomNumber();
    // console.log('Step',stepOfProgression);
    const startOfProgression = randomNumber();
    const progression = [startOfProgression];
    /* eslint-disable no-plusplus */
    for (let i = 1; progression.length < 10; i++) {
      progression[i] = stepOfProgression + progression[i - 1];
    // console.log(progression[i]);
    }

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    const randomNum = getRndInteger(0, 10);

    const saveProgression = progression[randomNum];
    progression[randomNum] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const answer = userAnswerAsNumber();
    return playLogic(saveProgression, answer, name);

    // if (answer === saveProgression) {
    //   console.log('Correct!');
    //   return true;
    // }

    // if (answer !== saveProgression) {
    //   console.log(`${answer} is wrong answer ;(. Correct answer was ${saveProgression}`);
    //   console.log(`Let's try again, ${name}!`);
    //   return false;
    // }
    // return null; // ADD THIS JUST TO FIX LINTER
  };
  let i = 0;
  while (i < 3) {
    const result = brainProgression();
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
export default progressionGame;
