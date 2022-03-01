import { userAnswerAsNumber } from "./ultis.js";

const playLogic = (answerMassive,name) => {

  for (let i = 0; i < answerMassive.length; i++) {
    console.log (`Question: ${answerMassive[i][0]}`);
    const answer = userAnswerAsNumber();
    if (Number(answerMassive[i][1]) === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answerMassive[i][1]}`);
      console.log(`Let's try again, ${name}!`)
      return 
    }
    if (i === answerMassive.length-1 && Number(answerMassive[i][1]) === answer) {
      console.log(`Congratulations, ${name}!`);
      break;
    } 
  }
};

export default playLogic;




////////////////////////////////////////OLD VERSION OF CODE//////////////////////
// const playLogic = (qestion, answer, name) => {
//   if (qestion === answer) {
//     console.log('Correct!');
//     return true;
//   }
//   console.log(`${answer} is wrong answer ;(. Correct answer was ${qestion}`);
//   console.log(`Let's try again, ${name}!`);
//   return false;
// };

// export default playLogic;
