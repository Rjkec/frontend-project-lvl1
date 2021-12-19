import readlineSync from 'readline-sync';
export const hi = () => {

	console.log('Welcome to the Brain Games!');
	const userName = readlineSync.question('May i have your name? ');
	console.log('Hello, ' + userName + '!');
	console.log ('Answer "yes" if the number is even, otherwise answer "no".');
	return userName;
}


