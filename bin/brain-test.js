import {randomNumber,userQuestion,userAnswer} from "../src/index.js"
import {
    cons, car, cdr, toString, isPair,
  } from '@hexlet/pairs';
  
const pair = cons(3, 5);

isPair(pair); // true

car(pair); // 3
cdr(pair); // 5

toString(pair); // (3, 5)

console.log(car(pair) + cdr(pair));