import readlineSync from 'readline-sync';
import askName from '../../src/cli.js';

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const num = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
    const isCorrect = isEven(num) ? answer === 'yes' : answer === 'no';

    if (!isCorrect) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(num) ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
