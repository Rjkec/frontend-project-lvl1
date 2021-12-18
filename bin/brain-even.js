import readlineSync from 'readline-sync';
import {hi} from '../src/cli.js';

const name = hi();

export const brainEven = () => {
    
    function getRndInteger(min, max) {
         return Math.floor(Math.random() * (max - min) ) + min;
    }
    let number = getRndInteger(0,10000);
    
    const question = ('Question: ' + `${number}`);
    
    console.log(question);
    
    const answer = readlineSync.question('Your answer: ');
        
        if (number % 2 === 0) {
    
            if (answer === 'yes'){
    
                console.log('Correct!');
                return true;
            }
            if (answer === 'no'){
    
                console.log('no is wrong answer ;(. Correct answer was yes');
                console.log ('Let\'s try again, ' + name + '!');
                return false;
                
            } 

            
        }
        if (number % 2 !== 0) {
    
            if (answer === 'yes'){
    
                console.log('yes is wrong answer ;(. Correct answer was no');
                console.log ('Let\'s try again, ' + name + '!');
                return false;
            }
            if (answer === 'no'){
    
                console.log('Correct!');
                return true;
    
            } 
        }
        console.log ('Let\'s try again, ' + name + '!');
        return false;
    
}

let i = 0;
while (i < 3) {

    const result = brainEven();
    //console.log('counter',i);
    if (result === true) {
        i++;
        //console.log('counter++',i);
        //continue;
        if (i === 3) {
            console.log('Congratulations, ' + name + '!');
        }
    }

    if (result === false) {
        //console.log('yes, its happening');
        break;
        //console.log('final i',i);
    }
}
