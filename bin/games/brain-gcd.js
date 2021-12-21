#!/usr/bin/env node
import {
    cons, car, cdr, toString, isPair,
    } from '@hexlet/pairs';
import { hi } from '../../src/cli.js';
import {
    randomNumber,userQuestion,userAnswer
    } from "../../src/index.js"

    
const name = hi();
console.log('Find the greatest common divisor of given numbers.');

const brainGcd = () => {

    const pair = cons(randomNumber(), randomNumber());
    console.log('Question: ' + `${car(pair)} ` + `${cdr(pair)}`);  
    const answer = +userAnswer();

    const egcd = (a, b) => {

        if (a === 0)
            return b;
    
        while (b !== 0) {
            if (a > b) {
                a = a - b;
            }
            else
                b = b - a;
        }
    
        return a;
    }

    if (egcd(car(pair),cdr(pair)) === answer){
        console.log ('Correct!');
        return true;
    }
    if (egcd(car(pair),cdr(pair)) !== answer){
        console.log(`${answer} ` + 'is wrong answer ;(. Correct answer was ' + `${egcd(car(pair),cdr(pair))}`);
        console.log('Let\'s try again, ' + `${name}`);
        return false;
    }
}

let i = 0;
while (i < 3) {

    const result = brainGcd();
    //console.log(result);
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
        //console.log('AAAyes, its happening');
        break;
        //console.log('final i',i);
    }
}