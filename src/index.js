import readlineSync from 'readline-sync';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}   

export const randomNumber = () => { 
    const number = getRndInteger(1,10);
    return number;
}
export const userQuestion = () => { 
    const number = randomNumber();
    const question ='Question: ' + `${number}`;
    console.log(question);
    return number;  
}
export const userAnswer = () => {
    const answer = readlineSync.question('Your answer: ')
    return answer;
}
