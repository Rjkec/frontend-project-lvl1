import readlineSync from 'readline-sync';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
const randomNumber = getRndInteger(0,10000);

export const userQuestion = () => { 
    console.log('Question: ' + `${randomNumber}`);  
    return randomNumber;
}
export const userAnswer = () => {
    const answer = readlineSync.question('Your answer: ')
    return answer;
}
