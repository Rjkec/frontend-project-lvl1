import {randomNumber,userQuestion,userAnswer} from "../src/index.js"
import {
    cons, car, cdr, toString, isPair,
  } from '@hexlet/pairs';
  
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

console.log(egcd(52,10));