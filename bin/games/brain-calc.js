#!/usr/bin/env node
import {
    cons, car, cdr, toString, isPair,
} from "@hexlet/pairs";
import { hi } from "../../src/cli.js";
import {
    randomNumber,userQuestion,userAnswer
    } from "../../src/index.js";

const name = hi();
console.log("What is the result of the expression?");

const brainCalc = () => {
    
    const multiply = () => {
        const pair = cons(randomNumber(), randomNumber());
        console.log("Question: " + `${car(pair)}` + " * " + `${cdr(pair)}`);  
        const answer = +userAnswer();

            if (car(pair) * cdr(pair) === answer) {
                console.log("Correct!");
                return true;
            }
            if (car(pair) * cdr(pair) !== answer) {
                console.log(`${answer}` + "is wrong answer ;(. Correct answer was " + `${car(pair) * cdr(pair)}`);
                console.log("Let's try again, " + `${name}` + "!");
                return false;
            }

   };

   const plus = () => {
        const pair = cons(randomNumber(), randomNumber());
        console.log("Question: " + `${car(pair)}` + " + "+ `${cdr(pair)}`);  
        const answer = userAnswer();

            if (car(pair) + cdr(pair) == answer) {
                console.log("Correct!");
                return true;
            }

            if (car(pair) + cdr(pair) !== answer) {
                console.log(`${answer}` + "is wrong answer ;(. Correct answer was " + `${car(pair) + cdr(pair)}`);
                console.log("Let's try again, " + `${name}` + "!");
                return false;
            }
    };

    const minus = () => {
        const pair = cons(randomNumber(), randomNumber());
        console.log("Question: " + `${car(pair)}` + " - "+ `${cdr(pair)}`);  
        const answer = userAnswer();

            if (car(pair) - cdr(pair) == answer) {
                console.log("Correct!");
                return true;
            }

            if (car(pair) - cdr(pair) !== answer) {
                console.log(`${answer}` + "is wrong answer ;(. Correct answer was " + `${car(pair) - cdr(pair)}`);
                console.log("Let's try again, " + `${name}` + "!");
                return false;
            }
    };

    function getRndInteg(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }   
    const randomNum = () => { 
        const number = getRndInteg(0,3);
        return number;
    };

    const operationNum = randomNum();

    if (operationNum === 0) {
        return multiply();
    }

    if (operationNum === 1) {
        return plus();
    }

    if (operationNum === 2) {
        return minus();
    }
};

let i = 0;
while (i < 3) {

    const result = brainCalc();
    //console.log(result);
    //console.log('counter',i);
    
    if (result === true) {
        i++;
        //console.log('counter++',i);
        //continue;
        if (i === 3) {
            console.log("Congratulations, " + name + "!");
        }
    }

    if (result === false) {
        //console.log('AAAyes, its happening');
        break;
        //console.log('final i',i);
    }
}
