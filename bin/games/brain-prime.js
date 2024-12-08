import readlineSync from 'readline-sync';
import askName from '../../src/cli.js';
import getRandomInt from '../../src/getRandomInt.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const brainPrime = () => {
  const name = askName();
  console.log('Answer "yes" if the number is prime. Otherwise answer "no".');
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const num = getRandomInt(1, 100);
    const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
    const correctAnswer = isPrime(num) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainPrime;
