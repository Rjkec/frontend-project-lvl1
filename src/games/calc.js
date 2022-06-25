import { getRandomNumber } from '../ultis.js';
import playLogic from '../engine.js';
import { roundsCount } from '../engine.js';

      const calcGame = () => {
        const description = 'What is the result of the expression?';
        const roundsMassive = [];
        for (let i = 0; i < roundsCount; i++) {
        
            const getRounds = (num1,num2,operator) => {
            
            num1 = getRandomNumber();
            num2 = getRandomNumber();

            const pickOfRandomOperation = () => {

            const getRandomOperationIndex = (min = 0, max = 2) => 
            Math.floor(Math.random() * (max - min + 1)) + min;
              

            let randomOperation = getRandomOperationIndex(0,2)
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

          const getFinalSetupOfTheRound = () => {

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


        return roundsMassive.push(getFinalSetupOfTheRound());
      }
      getRounds();
    
      }
      return playLogic(description,roundsMassive);
      }

      
export default calcGame;
