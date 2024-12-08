import readlineSync from 'readline-sync';
import askName from './brain-even.js';
import getRandomInt from '../../src/getRandomInt.js';

const brainCalc = () => {
  const name = askName();
  console.log('What is the result of the expression?');
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const operator = ['+', '-', '*'][getRandomInt(0, 2)];
    const question = `${num1} ${operator} ${num2}`;
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    let correctAnswer;

    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        correctAnswer = null;
    }

    if (answer !== String(correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainCalc;
