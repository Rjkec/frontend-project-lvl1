import readlineSync from 'readline-sync';
export const hi = () => {

	console.log('Welcome to the Brain Games!');
	const userName = readlineSync.question('May i have your name? ');
	console.log('Hello, ' + userName + '!');
	
}

