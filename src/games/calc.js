import { randomNumber } from '../ultis.js';
import playLogic from '../engine.js';
import { roundsCount } from '../engine.js';



      const calcGame = () => {
        console.log('What is the result of the expression?')
        const roundsMassive = [];
        for (let i = 0; i < roundsCount; i++) {
        
            const roundCreation = (num1,num2,operator) => {
            
            num1 = randomNumber();
            num2 = randomNumber();

            const pickOfRandomOperation = () => {

            function getRndInteg(min, max) {
              return Math.floor(Math.random() * (max - min)) + min
            }

            let randomOperation = getRndInteg(0,3)
            switch (randomOperation) {

              case 0:
                randomOperation === 0;
              return operator = 'sum';
    
              case 1:
                randomOperation === 1;
              return operator = 'substraction';
  
    
              case 2:
                randomOperation === 2;
              return operator = 'multiply';
            }
          }

          const operation = pickOfRandomOperation();

          const finalSetupOfTheRound = () => {

            if (operation === 'sum') {
              const sumOfMassive = [`${num1} + ${num2}`,`${num1 + num2}`]
              return sumOfMassive;
            }
            
            if (operation === 'substraction') {
              const minusOfMassive = [`${num1} - ${num2}`,`${num1 - num2}`]
              return minusOfMassive;
            }

            if (operation === 'multiply') {
              const multiplyOfMassive = [`${num1} * ${num2}`,`${num1 * num2}`]
              return multiplyOfMassive;
            }

          }


        return roundsMassive.push(finalSetupOfTheRound());
      }
      roundCreation();
    
      }
      return playLogic(roundsMassive);
      }

      
export default calcGame;

///////////////////////OLD VERSION/////////////////////
// const calcGame = () => {
//   //const name = greeting();
//   console.log('What is the result of the expression?');
//   const brainCalc = () => {
//     const multiply = () => {
//     let multiplyMassive = [];
//       for (let i = 0; i < 3; i++) {
//         const pair = [randomNumber(),randomNumber()];
//         multiplyMassive.push([`${pair[0]} * ${pair[1]}`,`${pair[0] * pair[1]}`]);
//       }
//       return playLogic(multiplyMassive);
//     };

//     const plus = () => {
//       let plusMassive = [];
//       for (let i = 0; i < 3; i++) {
//         const pair = [randomNumber(), randomNumber()];
//         plusMassive.push([`${pair[0]} + ${pair[1]}`,`${pair[0] + pair[1]}`]);
//       }
//       return playLogic(plusMassive);
//     };

//     const minus = () => {
//       let minusMassive = [];
//       for (let i = 0; i < 3; i++) {
//         const pair = [randomNumber(), randomNumber()];
//         minusMassive.push([`${pair[0]} - ${pair[1]}`,`${pair[0] - pair[1]}`]);
//       }
//       return playLogic(minusMassive);
//     };
//     // const randomPickOperation = () => {
//       function getRndInteg(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//       }
      
//       const operationNum = getRndInteg(0, 3);//WORKING WITH 

//       if (operationNum === 0) {
//         return multiply();
//       }

//       if (operationNum === 1) {
//         return plus();
//       }

//       if (operationNum === 2) {
//         return minus();
//       }
//     //return null; // ADD THIS JUST TO FIX LINTER
//     // }
  
//   };
//   brainCalc();
//   //return playLogic(calcGame(),name);
// };

  



      
 


