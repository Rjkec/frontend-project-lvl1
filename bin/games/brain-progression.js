#!/usr/bin/env node
import { hi } from '../../src/cli.js';
import {
    randomNumber,userQuestion,userAnswer
    } from "../../src/index.js"

const name = hi();
console.log('What number is missing in the progression?');

const brainProgression = () => {

    const stepOfProgression = randomNumber();
    // console.log('Step',stepOfProgression);
    const startOfProgression = randomNumber();
    let progression = [startOfProgression];

    for (let i = 1; progression.length < 10; i++) {

        progression[i] = stepOfProgression + progression[i-1]; 
        // console.log(progression[i]); 
    }

    function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }   
    const randomNum = getRndInteger(0,10);
    
    const saveProgression = progression[randomNum];
    progression[randomNum] = `..`;
    

    console.log('Question: ' + `${progression}`);  
    const answer = +userAnswer();

    if (answer === saveProgression) {

        console.log('Correct!');
        return true;
    }

    if (answer !== saveProgression) {
    
        console.log(`${answer}` + ' is wrong answer ;(. Correct answer was ' + `${saveProgression}`);
        console.log ('Let\'s try again, ' + name + '!');
        return false;
        
    } 

}
let i = 0;
while (i < 3) {

    const result = brainProgression();
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




