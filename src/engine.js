import readlineSync from 'readline-sync';

export const roundsCount = 3;
const playLogic = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  //console.log('Massive check', generateRound);
  console.log(description);

  for (let i = 0; i < roundsCount; i++) {
    const [question, answer] = generateRound[i];
    console.log (`Question: ${question}`);
    const answerOfUser = readlineSync.question('Your answer: ');
    //change answer, delete number(answerOfUser);
    if (answer === answerOfUser) {
      console.log('Correct!');
    } else {
      console.log(`${answerOfUser} is wrong answer ;(. Correct answer was ${answer}`);
      console.log(`Let's try again, ${userName}!`)
      return 
    }
  }
  
  console.log(`Congratulations, ${userName}!`);
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
